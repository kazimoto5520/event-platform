import { NextRequest } from "next/server";
import { verifyToken } from "../auth";

export function requireAuth(req: NextRequest) {
  const header = req.headers.get("authorization");

  if (!header || !header.startsWith("Bearer ")) {
    throw new Error("Unauthorized");
  }

  const token = header.replace("Bearer ", "");
  return verifyToken(token);
}
