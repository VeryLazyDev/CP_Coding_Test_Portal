import Express from "express";
import { checkAuthorization } from "../../utils/authentication.mjs";
import { getTeamById, getTeamByName } from "../../database/team.mjs";
import { getAllQuestionsByTeam } from "../../database/questions.mjs";

const QuestionsAPI = Express.Router();

QuestionsAPI.get("/", async (req, res) => {
  try {
    //check authorization
    const { authorization } = req.headers;
    const checkAuth = checkAuthorization(authorization, false);
    if (!checkAuth.auth) {
      return res.status(checkAuth.status).json({ error: checkAuth.error });
    }
    //fetch questions according to user team type
    const team = await getTeamByName(checkAuth.team);
    const questions = await getAllQuestionsByTeam(team.id);
    const questionsWithNoAnswers = questions.map(
      ({ correct_answer, ...rest }) => rest,
    );
    res.status(200).json({ questions: questionsWithNoAnswers });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error : " + e.message });
  }
});

export default QuestionsAPI;
