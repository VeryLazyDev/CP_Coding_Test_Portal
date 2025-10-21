import { prisma } from "./database.mjs";

export const getAllTypes = async () => {
    const types = await prisma.questionType.findMany();
    return types;
};

export const getTypeById = async (id) => {
    const type = await prisma.questionType.findUnique({
        where: { id },
    });
    return type;
};

export const createType = async (name) => {
    const type = await prisma.questionType.create({
        data: { name },
    });
    return type;
};

export const updateType = async (id, name) => {
    const type = await prisma.questionType.update({
        where: { id },
        data: { name },
    });
    return type;
};

const deleteType = async (id) => {
    const type = await prisma.questionType.delete({
        where: { id },
    });
    return type;
};
