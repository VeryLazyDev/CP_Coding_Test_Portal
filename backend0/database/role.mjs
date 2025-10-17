import { prisma } from "./database.mjs";

export async function getAllRoles() {
    const roles = await prisma.role.findMany();
    return roles;
}
export async function getRoleById(id) {
    const role = await prisma.role.findUnique({
        where: { id },
    });
    return role;
}
export async function getRoleByName(roleName) {
    const role = await prisma.role.findUnique({ where: roleName });
    return role;
}

export async function createNewRole(roleName) {
    const role = await prisma.role.create({
        data: { roleName },
    });
    return role;
}
