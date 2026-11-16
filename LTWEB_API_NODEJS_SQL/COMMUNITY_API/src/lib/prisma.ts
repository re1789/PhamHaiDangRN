import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.ts";
import "dotenv/config";
const url = process.env.DATABASE_URL;

if(!url) {
    throw new Error("Thiếu biến DATABASE_URL trong file .env");
}

const adapter = new PrismaMariaDb(url);
const prisma = new PrismaClient({adapter});

export default prisma;