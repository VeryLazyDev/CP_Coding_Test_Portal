import Express from "express";
import {
    createToken,
    hashPassword,
    verifyPassword,
    verifyToken,
} from "../../common/utils/authManager.mjs";
import { createNewUser } from "../database/user.mjs";
import { getTeamById } from "../../common/database/team.mjs";
import { getRoleById } from "../../common/database/role.mjs";
import { checkAuthorization } from "../utils/checkAuthAdmin.mjs";
const authApi = Express.Router();

authApi.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const dbUser = await getUserByUsername(username);
        //check the user existence
        if (!dbUser) {
            console.log("User not found");
            return res
                .status(401)
                .json({ error: "Incorrect username or password" });
        }
        //verify the password
        const verify = await verifyPassword(password, dbUser.password);
        if (!verify) {
            console.log("Incorrect Password");
            return res
                .status(401)
                .json({ error: "Incorrect username or password" });
        }
        //get user team and role
        const team = await getTeamById(dbUser.teamId);
        const role = await getRoleById(dbUser.roleId);
        if (role.roleName !== "Admin") {
            console.log("This is not the admin account");
            return res
                .status(401)
                .json({ error: "Incorrect username or password" });
        }
        //create json token
        const token = createToken(
            dbUser.id,
            dbUser.username,
            dbUser.name,
            dbUser.email,
            team.teamName,
            role.roleName,
        );
        return res.status(200).json({ status: "ok", token });
    } catch (e) {
        return res
            .status(500)
            .json({ error: "Internal Server Error : " + e.message });
    }
});

authApi.post("/register", async (req, res) => {
    try {
        const { name, email, username, password, teamId, roleId } = req.body;
        const { authorization } = req.headers;
        //check Required field
        if (
            username == "" ||
            name == "" ||
            password == "" ||
            teamId == "" ||
            roleId == ""
        ) {
            return res.status(401).json({ error: "Missing required fields" });
        }
        //Check authorization header
        if (!authorization) {
            return res
                .status(401)
                .json({ error: "Authorization header missing" });
        }
        //check authorization format
        const parts = authorization.split(" ");
        if (parts.length !== 2) {
            return res
                .status(400)
                .json({ error: "Invalid authorization header format" });
        }
        //check the bearer scheme
        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme)) {
            return res.status(400).json({ error: "UnExpected Bearer scheme" });
        }
        //check token existence
        if (!token || token.trim() === "") {
            return res.status(400).json({ error: "Token is empty" });
        }
        //verify token
        const verify = verifyToken(token);
        if (!verify) {
            return res.status(401).json({ error: "Unauthorize Token" });
        }
        //check role
        if (verify.role !== "Admin") {
            return res
                .status(401)
                .json({ error: "Only admin can create account" });
        }
        //hash the password of new user
        const hashedPassword = await hashPassword(password);
        const newUser = createNewUser(
            name,
            username,
            email,
            hashedPassword,
            roleId,
            teamId,
        );
        return res.status(200).json({ status: "ok", data: { newUser } });
    } catch (e) {
        return res.status(500).json({
            error: "Internal Server Error: " + e.message,
        });
    }
});

export default authApi;
