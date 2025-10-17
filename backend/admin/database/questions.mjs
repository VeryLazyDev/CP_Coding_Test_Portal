import { prisma } from "../../common/database/database.mjs";

export async function createNewQuestion(
    question,
    options,
    image,
    type,
    correct_answer,
    teamId,
) {
    const ques = await prisma.questions.create({
        data:{
        question,
        options,
        image,
        type,
        correct_answer,
        teamId,
        }
    });
    return ques;
}


// export async function getAllQuestions() {
//     const allQuestions = await prisma.questions.findMany()
// }