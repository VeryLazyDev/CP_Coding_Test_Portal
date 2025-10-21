import Express from "express";
import RegisterRoutesAdmin from "./api/admin/APIRegisterAdmin.mjs";
import RegisterRoutesUser from "./api/user/APIRegisterUser.mjs";
import Initializer, { swaggerLoader } from "./utils/initializer.mjs";
import path from "path";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import UtilityApi from "./api/utilityApi.mjs";
import GlobalAuthApi from "./api/authAPI.mjs";
import { fileURLToPath } from "url";
import serveUI from "./api/serveUserInterface.mjs";
const app = Express();
const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//This will initialize all the require features
Initializer();

//Use as middleware for decoding json
app.use(Express.json());
app.use(cors());

//This is where all the routes are define
app.use("/api/v1/user", RegisterRoutesUser);
app.use("/api/v1/admin", RegisterRoutesAdmin);
app.use("/api/v1/auth", GlobalAuthApi);
app.use("/api/utils", UtilityApi);

// --- Serve static files ---
app.use(Express.static(path.join(__dirname, "dist")));

// --- SPA fallback (catch-all) ---
app.use("/", serveUI);

//Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerLoader()));

app.listen(port, () => {
    console.log(`Server is listen to http://localhost:${port}`);
});
