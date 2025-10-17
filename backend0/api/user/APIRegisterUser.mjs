import Express from "express";
import authApi from "./authAPI.mjs";
import QuestionsAPI from "./questionsAPI.mjs";

const RegisterUserRoutes = Express.Router();
RegisterUserRoutes.use("/auth", authApi);
RegisterUserRoutes.use("/questions", QuestionsAPI);
export default RegisterUserRoutes;
