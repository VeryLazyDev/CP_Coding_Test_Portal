import Express from "express";
import {
    createNewQuestion,
    getAllQuestionsByTeam,
} from "../../database/questions.mjs";

const questionAPI = Express.Router();

questionAPI.post("/", async (req, res) => {
    try {
        const { question, options, image, type, teamId, correct_answer } =
            req.body;

        const resultQues = createNewQuestion(
            question,
            options,
            image,
            type,
            correct_answer,
            teamId,
        );
        return res.status(201).json({
            status: "successfully created question",
            data: resultQues,
        });
    } catch (e) {
        return res
            .status(400)
            .json({ status: "Internal Server Error: ", error: e.message });
    }
});

questionAPI.get("/all", async (req, res) => {
    try {
        const { teamId } = req.headers;
        const allQuestions = await getAllQuestionsByTeam(teamId);
        return res
            .status(200)
            .json({ message: "all questions by teamId", data: allQuestions });
    } catch (e) {
        return res
            .status(400)
            .json({ status: "Internal Server Error: ", error: e.message });
    }
});

export default questionAPI;
