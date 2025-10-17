import Express from "express";
import authApi from "./authAPI.mjs";

const RegisterUserRoutes = Express.Router();
RegisterUserRoutes.use("/auth", authApi);
export default RegisterUserRoutes;
