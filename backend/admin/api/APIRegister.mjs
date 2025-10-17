import Express from "express";
import authApi from "./auth.mjs";
import questionAPI from "./questionAPI.mjs";

const RegisterRoutes = Express.Router();
RegisterRoutes.use("/auth", authApi);
RegisterRoutes.use("/question", questionAPI);

export default RegisterRoutes;
