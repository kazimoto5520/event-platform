import { AuthPayload } from "../auth";

export function requireRole(
  user: AuthPayload,
  roles: AuthPayload["role"][]
) {
  if (!roles.includes(user.role)) {
    throw new Error("Forbidden");
  }
}
