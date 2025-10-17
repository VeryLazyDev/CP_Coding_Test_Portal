import { prisma } from "../../common/database/database.mjs";

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
