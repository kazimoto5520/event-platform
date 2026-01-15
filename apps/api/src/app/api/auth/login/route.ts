import { NextResponse } from "next/server";
import { prisma } from "@event-platform/db/client";
import { verifyPassword } from "@/lib/password";
import { signToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { phone, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { phone },
  });

  if (!user || !user.password) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const valid = await verifyPassword(password, user.password);
  if (!valid) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = signToken({
    userId: user.id,
    role: user.role,
  });

  return NextResponse.json({ token });
}
