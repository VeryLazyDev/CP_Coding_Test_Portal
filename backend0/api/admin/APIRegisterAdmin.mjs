import Express from "express";
import authApi from "./authAPI.mjs";
import questionAPI from "./questionAPI.mjs";
const RegisterAdminRoutes = Express.Router();
RegisterAdminRoutes.use("/auth", authApi);
RegisterAdminRoutes.use("/question", questionAPI);

export default RegisterAdminRoutes;
