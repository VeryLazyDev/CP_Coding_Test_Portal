import { prisma } from "./db.mjs";
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
export async function createNewUser(
    name,
    username,
    email,
    password,
    roleId,
    teamId,
) {
    const user = await prisma.user.create({
        data: { name, username, email, password, roleId, teamId },
    });
    return user;
}
export async function disableUserWithID(id) {
    const user = await prisma.user.update({
        where: { id },
        data: {
            active: false,
        },
    });
    return user;
}
export async function disableUserWithUsername(username) {
    const user = await prisma.user.update({
        where: { username },
        data: {
            active: false,
        },
    });
    return user;
}
