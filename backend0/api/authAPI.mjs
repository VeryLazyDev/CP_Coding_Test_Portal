import Express from "express";
import { getUserByUsername } from "../database/user.mjs";
import { createToken, verifyPassword } from "../utils/authentication.mjs";
import { getTeamById } from "../database/team.mjs";
import { getRoleById } from "../database/role.mjs";
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
export default authApi;
