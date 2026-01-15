import { NextResponse } from "next/server";
import { prisma } from "@event-platform/db/client";import { isValidPhone, normalizePhone } from "@/lib/phone";
import { generateOtp, hashOtp } from "@/lib/otp";
import { sendSms } from "@/lib/sms";

export async function POST(req: Request) {
  const { phone } = await req.json();

  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

  const normalizedPhone = normalizePhone(phone);

  const existing = await prisma.user.findUnique({
    where: { phone: normalizedPhone },
  });

  if (existing) {
    return NextResponse.json({ error: "Phone already registered" }, { status: 409 });
  }

  const otp = generateOtp();
  const otpHash = await hashOtp(otp);

  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 min

  await prisma.phoneOtp.upsert({
    where: { phone: normalizedPhone },
    update: {
      otpHash,
      expiresAt,
      attempts: 0,
    },
    create: {
      phone: normalizedPhone,
      otpHash,
      expiresAt,
    },
  });

  await sendSms(normalizedPhone, `Your verification code is ${otp}`);

  return NextResponse.json({ success: true });
}
