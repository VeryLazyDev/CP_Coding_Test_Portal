import { prisma } from "./database.mjs";

export async function getAllTeam() {
    const teams = await prisma.team.findMany();
    return teams;
}
export async function getTeamById(id) {
    const team = await prisma.team.findUnique({
        where: { id },
    });
    return team;
}
export async function getTeamByName(teamName) {
    const team = await prisma.team.findUnique({
        where: { teamName },
    });
    return team;
}
