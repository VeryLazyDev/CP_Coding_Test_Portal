import Express from "express";
import authApi from "./authAPI.mjs";
import QuestionsAPI from "./questionsAPI.mjs";
import AnswerAPI from "./userAnswersAPI.mjs";
const RegisterUserRoutes = Express.Router();
RegisterUserRoutes.use("/auth", authApi);
RegisterUserRoutes.use("/questions", QuestionsAPI);
RegisterUserRoutes.use("/answer", AnswerAPI);
export default RegisterUserRoutes;
