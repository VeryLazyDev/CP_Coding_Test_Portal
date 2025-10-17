import Express from "express";
import {
    createToken,
    hashPassword,
    verifyPassword,
} from "../../common/utils/authManager.mjs";
const authApi = Express.Router();

authApi.post("/login", async (req, res) => {
    const hashedPassword = await hashPassword("iambatman");
    const checkUsername = "Bruce";
    const { username, password } = req.body;

    if (
        (await verifyPassword(password, hashedPassword)) &&
        username === checkUsername
    ) {
        const token = createToken(1, username, "AMS");
        return res.json({ token, msg: "Login Success" });
    }

    res.status(401).json({ msg: "Login Failed" });
});

export default authApi;
