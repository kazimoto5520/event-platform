import { PrismaClient } from './generated/prisma/client';
export const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
    accelerateUrl: process.env.PRISMA_ACCELERATE_URL ?? '',
});
