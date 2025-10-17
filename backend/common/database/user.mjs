import { prisma } from "./database.mjs";
export async function getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
}
export async function getUserByID(id) {
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });
    return user;
}

export async function getUserByUsername(username) {
    const user = await prisma.user.findUnique({
        where: {
            username,
        },
    });
    return user;
}
