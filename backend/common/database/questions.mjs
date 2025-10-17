import { prisma } from "./database.mjs";

export async function getAllQuestions() {
    const questions = await prisma.questions.findMany();
    return questions;
}
export async function getAllQuestionsByTeam(teamId) {
    const questions = await prisma.questions.findMany({
        where: {
            teamId,
        },
    });
    return questions;
}
