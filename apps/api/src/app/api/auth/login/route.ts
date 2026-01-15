import { NextResponse } from "next/server";
import { prisma } from "@event-platform/db/client";
import { verifyPassword } from "@/lib/password";
import { signToken } from "@/lib/auth";
import { createLoggerWithContext } from "@event-platform/logger";

const logger = createLoggerWithContext("auth-login");

export async function POST(req: Request) {
  logger.info("Login request received");

  try {
    const { phone, password } = await req.json();

    logger.debug("Login payload received", {
      phone,
      hasPassword: Boolean(password),
    });

    const user = await prisma.user.findUnique({
      where: { phone },
    });

    if (!user || !user.password) {
      logger.warn("Invalid credentials (user not found or missing password)", {
        phone,
      });

      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const valid = await verifyPassword(password, user.password);
    if (!valid) {
      logger.warn("Invalid credentials (wrong password)", {
        userId: user.id,
        phone: user.phone,
      });

      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = signToken({
      userId: user.id,
      role: user.role,
    });

    logger.info("Login success", {
      userId: user.id,
      role: user.role,
    });

    return NextResponse.json({ token });
  } catch (err: any) {
    logger.error("Login failed with server error", {
      error: err?.message,
    });

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
