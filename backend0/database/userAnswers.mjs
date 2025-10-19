import { prisma } from "./database.mjs";

export async function getAllAnswers() {
    const answers = await prisma.userAnswers.findMany();
    return answers;
}
export async function getAnswersWithUserID(userId) {
    const answers = await prisma.userAnswers.findMany({ where: userId });
    return answers;
}
export async function getAnswersWithQuestionsId(questionId) {
    const answers = await prisma.userAnswers.findMany({ where: questionId });
    return answers;
}
export async function getAnswerByUserQuestion(userId, questionId) {
    const answer = await prisma.userAnswers.findUnique({
        where: {
            userId,
            questionId,
        },
    });
    return answer;
}
export async function saveAnswer(userId, questionId, answer) {
    const savedAnswer = await prisma.userAnswers.create({
        data: {
            userId,
            questionId,
            answer,
        },
    });
    return savedAnswer;
}
export async function saveAnswers(answers) {
    const savedAnswers = await prisma.userAnswers.createMany({
        data: [...answers],
    });
    return savedAnswers;
}
export async function updateAnswer(userId, questionId, answer) {
    const updatedAnswer = await prisma.userAnswers.update({
        where: { userId, questionId },
        data: { answer },
    });
    return updatedAnswer;
}
