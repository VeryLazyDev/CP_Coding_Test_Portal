import { prisma } from "../../common/database/database.mjs";

export async function createNewRole(roleName) {
    const role = await prisma.role.create({
        data: { roleName },
    });
    return role;
}
