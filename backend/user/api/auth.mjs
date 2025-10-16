import Express from "express";
import {
    createToken,
    hashPassword,
    verifyPassword,
} from "../../common/utils/authManager.mjs";
const authApi = Express.Router();
/**
 * @openapi
 * /api/v1/user/auth/login:
 *   post:
 *     summary: User login
 *     description: Authenticates the user and returns a JWT token if credentials are valid.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: Bruce
 *               password:
 *                 type: string
 *                 example: iambatman
 *     responses:
 *       200:
 *         description: Login response with JWT token or failure message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 msg:
 *                   type: string
 *                   example: Login Success
 *       400:
 *         description: Missing or invalid request body
 *       401:
 *         description: Invalid username or password
 */
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
