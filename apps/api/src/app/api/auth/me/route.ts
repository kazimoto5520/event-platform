import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@event-platform/db/client";
import { requireAuth } from "@/lib/middleware/auth";

export async function GET(req: NextRequest) {
  const userAuth = requireAuth(req);

  const user = await prisma.user.findUnique({
    where: { id: userAuth.userId },
    select: {
      id: true,
      fullName: true,
      phone: true,
      role: true,
    },
  });

  return NextResponse.json(user);
}
