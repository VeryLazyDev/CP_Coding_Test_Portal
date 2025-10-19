import Express from "express";
import { hashPassword } from "../utils/authentication.mjs";
const UtilityApi = Express.Router();

UtilityApi.use("/passwordhasher", async (req, res) => {
  const password = req.query.password;
  if (!password) {
    res.status(400).json({ error: "Password is required" });
    return;
  }
  const hashedPassword = await hashPassword(password);
  res.json({ hashedPassword });
});

export default UtilityApi;
