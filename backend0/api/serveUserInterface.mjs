import Express from "express";
const serveUI = Express();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

serveUI.get("/:pathname", async (req, res) => {
    const { pathname } = req.params;
    const filePath = path.join(__dirname, "../dist/index.html");
    res.sendFile(filePath);
});

export default serveUI;
