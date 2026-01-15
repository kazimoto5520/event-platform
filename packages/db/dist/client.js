import { PrismaClient } from "./generated/prisma/client";
const globalForPrisma = globalThis;
export const prisma = globalForPrisma.prisma ??
    new PrismaClient({
        log: ["query", "info", "warn", "error"],
        accelerateUrl: process.env.PRISMA_ACCELERATE_URL ?? "",
    });
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
