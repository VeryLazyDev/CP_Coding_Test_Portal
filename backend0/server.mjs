import Express from "express";
import RegisterRoutesAdmin from "./api/admin/APIRegisterAdmin.mjs";
import RegisterRoutesUser from "./api/user/APIRegisterUser.mjs";
import Initializer from "./utils/initializer.mjs";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import cors from "cors";
import merge from "lodash.merge";

const app = Express();
const port = 8080;

//This will initialize all the require features
Initializer();

//Use as middleware for decoding json
app.use(Express.json());
app.use(cors());

//This is all the routes are define
app.use("/api/v1/user", RegisterRoutesUser);
app.use("/api/v1/admin", RegisterRoutesAdmin);

//Swagger
const swaggerAdminAuth = YAML.load("./docs/admin/adminAuth.yml");
const swaggerDocuments = merge({}, swaggerAdminAuth);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocuments));

app.listen(port, () => {
    console.log(`Server is listen to http://localhost:${port}`);
});
