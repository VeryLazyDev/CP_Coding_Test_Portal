import Express from "express";
import {
    createToken,
    hashPassword,
    verifyPassword,
} from "../../utils/authentication.mjs";
const authApi = Express.Router();

authApi.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (
            (await verifyPassword(password, hashedPassword)) &&
            username === checkUsername
        ) {
            const token = createToken(1, username, "AMS");
            return res.json({ token, msg: "Login Success" });
        }

        res.status(401).json({ msg: "Login Failed" });
    } catch (e) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

export default authApi;
