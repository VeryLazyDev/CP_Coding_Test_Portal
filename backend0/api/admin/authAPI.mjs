import Express from "express";
import {
    createToken,
    hashPassword,
    verifyPassword,
    checkAuthorization,
} from "../../utils/authentication.mjs";
import { createNewUser, getUserByUsername } from "../../database/user.mjs";
import { getTeamById } from "../../database/team.mjs";
import { getRoleById } from "../../database/role.mjs";
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
        return res.status(200).json({
            name: dbUser.name,
            username: dbUser.username,
            email: dbUser.email,
            team: team.teamName,
            role: role.roleName,
            token,
        });
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
        //Check authorization
        const checkAuthBody = checkAuthorization(authorization);
        if (!checkAuthBody.auth) {
            return res
                .status(checkAuthBody.status)
                .json({ error: checkAuthBody.error });
        }

        //hash the password of new user
        const hashedPassword = await hashPassword(password);
        const newUser = await createNewUser(
            name,
            username,
            email,
            hashedPassword,
            roleId,
            teamId,
        );
        return res.status(200).json({ status: "ok", data: { newUser } });
    } catch (e) {
        if (e.code === "P2002") {
            // Unique constraint failed
            return res.status(409).json({
                error: `Username "${e.meta.target}" already exists`,
            });
        }
        return res.status(500).json({
            error: "Internal Server Error: " + e.message,
        });
    }
});

export default authApi;
