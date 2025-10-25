import { PrismaClient } from '@prisma/client';
export const db = new PrismaClient({ log: process.env.NODE_ENV==='development' ? ['query','warn','error'] : ['error'] });
export * from '@prisma/client';
export * from './queries';
