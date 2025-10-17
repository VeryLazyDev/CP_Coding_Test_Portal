import { prisma } from "./db.mjs";

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
export async function createNewQuestion(
    question,
    options,
    image,
    type,
    correct_answer,
    teamId,
) {
    const question = await prisma.questions.create({
        question,
        options,
        image,
        type,
        correct_answer,
        teamId,
    });
}
