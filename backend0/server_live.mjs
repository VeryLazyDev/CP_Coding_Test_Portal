import Express from "express";
import RegisterRoutesAdmin from "./api/admin/APIRegisterAdmin.mjs";
import RegisterRoutesUser from "./api/user/APIRegisterUser.mjs";
import UtilityApi from "./api/utilityApi.mjs";
import Initializer from "./utils/initializer.mjs";
import { fileURLToPath } from "url";
import path from "path";
import serveUI from "./api/serveUserInterface.mjs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = Express();
const port = process.env.PORT | 8080;

//This will initialize all the require features
Initializer();

//Use as middleware for decoding json
app.use(Express.json());

//This is where all the routes are define
app.use("/api/v1/user", RegisterRoutesUser);
app.use("/api/v1/admin", RegisterRoutesAdmin);
app.use("/api/utils", UtilityApi);
// --- Serve static files ---
app.use(Express.static(path.join(__dirname, "dist")));

// --- SPA fallback (catch-all) ---
app.use("/", serveUI);
app.listen(port, () => {
    console.log(`Server is listen to http://localhost:${port}`);
});
