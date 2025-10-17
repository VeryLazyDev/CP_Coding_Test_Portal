//this is where prisma client is located
import { PrismaClient } from "./prisma/index.js";

const prisma = new PrismaClient();

async function DBConnect() {
    try {
        await prisma.$connect();
        console.log("DB Connected");
    } catch (e) {
        console.log("DB Connection Failed");
    }
}

export { DBConnect, prisma };
