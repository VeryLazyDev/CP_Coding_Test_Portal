import Express from "express";
import authApi from "./auth.mjs";

const RegisterRoutes = Express.Router();
RegisterRoutes.use("/auth", authApi);

export default RegisterRoutes;
