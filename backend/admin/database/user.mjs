import { prisma } from "../../common/database/database.mjs";

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
