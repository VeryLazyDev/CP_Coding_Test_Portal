import Express from "express";
import {
  createToken,
  hashPassword,
  verifyPassword,
} from "../../utils/authentication.mjs";
import { getTeamById } from "../../database/team.mjs";
import { getRoleById } from "../../database/role.mjs";
import { getUserByUsername } from "../../database/user.mjs";
const authApi = Express.Router();

authApi.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const dbUser = await getUserByUsername(username);
    if (!dbUser) {
      return res.status(401).json({ error: "Incorrect username or password" });
    }
    const passwordVerify = await verifyPassword(password, dbUser.password);
    const team = await getTeamById(dbUser.teamId);
    const role = await getRoleById(dbUser.roleId);
    if (!passwordVerify) {
      return res.status(401).json({ error: "Incorrect username or password" });
    }
    const token = createToken(
      dbUser.id,
      dbUser.username,
      dbUser.name,
      dbUser.email,
      team.teamName,
      role.roleName,
    );
    return res.json({
      token,
      name: dbUser.name,
      username: dbUser.username,
      email: dbUser.email,
      team: team.teamName,
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

export default authApi;
