import { prisma } from "../../common/database/database.mjs";

export async function createNewTeam(teamName) {
    const team = await prisma.team.create({
        data: {
            teamName,
        },
    });
    return team;
}

export async function updateTeamName(id) {
    const team = await prisma.team.update({
        where: { id },
        data: { teamName },
    });
    return team;
}
