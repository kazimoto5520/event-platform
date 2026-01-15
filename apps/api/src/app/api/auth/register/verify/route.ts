import { NextResponse } from "next/server";
import { prisma } from "@event-platform/db/client";
import { hashPassword } from "@/lib/password";
import { signToken } from "@/lib/auth";
import { verifyOtp } from "@/lib/otp";
import { normalizePhone } from "@/lib/phone";

export async function POST(req: Request) {
  const { fullName, phone, password, otp, role } = await req.json();

  if (!fullName || !phone || !password || !otp) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const normalizedPhone = normalizePhone(phone);

  const record = await prisma.phoneOtp.findUnique({
    where: { phone: normalizedPhone },
  });

  if (!record) {
    return NextResponse.json({ error: "OTP not found" }, { status: 400 });
  }

  if (record.expiresAt < new Date()) {
    return NextResponse.json({ error: "OTP expired" }, { status: 400 });
  }

  if (record.attempts >= 5) {
    return NextResponse.json({ error: "Too many attempts" }, { status: 429 });
  }

  const valid = await verifyOtp(otp, record.otpHash);

  if (!valid) {
    await prisma.phoneOtp.update({
      where: { phone: normalizedPhone },
      data: { attempts: { increment: 1 } },
    });

    return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
  }

  const userRole =
    role === "ORGANIZER" || role === "SCANNER" ? role : "ORGANIZER";

  const passwordHash = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      fullName,
      phone: normalizedPhone,
      role: userRole,
      password: passwordHash,
      phoneVerified: true,
    },
  });

  await prisma.phoneOtp.delete({
    where: { phone: normalizedPhone },
  });

  const token = signToken({
    userId: user.id,
    role: user.role,
  });

  return NextResponse.json({
    token,
    user: {
      id: user.id,
      fullName: user.fullName,
      phone: user.phone,
      role: user.role,
    },
  });
}
