import Express from "express";
import {
    createNewQuestion,
    getAllQuestionsByTeam,
} from "../../database/questions.mjs";
import { getTeamById } from "../../database/team.mjs";
import { getTypeById } from "../../database/questionsType.mjs";
import { checkAuthorization } from "../../utils/authentication.mjs";

const questionAPI = Express.Router();

questionAPI.post("/create", async (req, res) => {
    try {
        //Get Authorization Header
        const { authorization } = req.headers;
        //Check authorization
        const checkAuthBody = checkAuthorization(authorization);
        if (!checkAuthBody.auth) {
            return res
                .status(checkAuthBody.status)
                .json({ error: checkAuthBody.error });
        }
        //Valide Input data
        const { question, options, image, typeId, teamId, correct_answer } =
            req.body;
        if (
            typeId == 3 &&
            (image == null || image == undefined || image == "")
        ) {
            return res.status(400).json({
                status: "Invalid Image URL",
                error: "Image is required for this questions type",
            });
        }
        const resultQues = await createNewQuestion(
            question,
            options,
            image,
            typeId,
            correct_answer,
            teamId,
        );
        return res.status(201).json({
            status: "Question Created Successfully",
            data: resultQues,
        });
    } catch (e) {
        return res
            .status(400)
            .json({ status: "Internal Server Error: ", error: e.message });
    }
});

questionAPI.get("", async (req, res) => {
    try {
        //Get Authorization Header
        const { authorization } = req.headers;
        //Check authorization
        const checkAuthBody = checkAuthorization(authorization);
        if (!checkAuthBody.auth) {
            return res
                .status(checkAuthBody.status)
                .json({ error: checkAuthBody.error });
        }
        const { teamId } = req.query;
        const team = await getTeamById(Number(teamId));
        const allQuestions = await getAllQuestionsByTeam(Number(teamId));
        return res.status(200).json({
            message: "All questions for " + team.teamName + " Team.",
            data: allQuestions,
        });
    } catch (e) {
        return res
            .status(400)
            .json({ status: "Internal Server Error: ", error: e.message });
    }
});

export default questionAPI;
