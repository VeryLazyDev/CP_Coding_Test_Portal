import Express from "express";
import {
    createToken,
    hashPassword,
    verifyPassword,
} from "../../common/utils/authManager.mjs";
const authApi = Express.Router();

authApi.post("/login", async (req, res) => {
    const hashedPassword = await hashPassword("TestPassword");
    const { username, password } = req.body;
    if (await verifyPassword(password, hashedPassword)) {
        const token = createToken(1, username, "AMS");
        res.json({ token, msg: "Login Success" });
    }
    res.json({ msg: "Login Failed" });
});

export default authApi;
