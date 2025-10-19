import Express from "express";
import { checkAuthorization } from "../../utils/authentication.mjs";
import { saveAnswers } from "../../database/userAnswers.mjs";
const AnsSubAPI = Express.Router();

AnsSubAPI.post("/submit", async (req, res) => {
    try {
        // check authentication
        const { authorization } = req.headers;
        const checkAuth = checkAuthorization(authorization, false);
        if (!checkAuth.auth) {
            return res
                .status(checkAuth.status)
                .json({ error: checkAuth.error });
        }
        // check the answers contain in request body
        const { answers } = req.body;
        if (answers !== undefined && answers.length < 0) {
            return res
                .status(400)
                .json({ error: "Missing Required Data In Body" });
        }
        //validate answers
        const InvalidAnswer = answers.filter(
            (item) =>
                item.answer === undefined ||
                item.answer.replaceAll(" ", "") === "" ||
                item.answer === null ||
                item.questionId === undefined ||
                item.questionId === null ||
                typeof item.questionId !== "number",
        );
        if (InvalidAnswer.length > 0) {
            return res.status(400).json({ error: "Invalid Data Contains" });
        }
        const userAnswers = answers.map(({ questionId, answer }) => ({
            userId: 1,
            questionId,
            answer,
        }));
        //save answers in database
        const savedAnswers = await saveAnswers(userAnswers);
        res.status(200).json({
            message: "Successfully Submit",
            count: savedAnswers.count,
        });
    } catch (e) {
        res.status(500).json({ error: "Internal server error : " + e.message });
    }
});

export default AnsSubAPI;
