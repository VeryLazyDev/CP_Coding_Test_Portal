import Express from "express";
import RegisterRoutesAdmin from "./api/admin/APIRegisterAdmin.mjs";
import RegisterRoutesUser from "./api/user/APIRegisterUser.mjs";
import Initializer, { swaggerLoader } from "./utils/initializer.mjs";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import cors from "cors";
import merge from "lodash.merge";
import UtilityApi from "./api/utilityApi.mjs";

const app = Express();
const port = 8080;

//This will initialize all the require features
Initializer();

//Use as middleware for decoding json
app.use(Express.json());
app.use(cors());

//This is where all the routes are define
app.use("/api/v1/user", RegisterRoutesUser);
app.use("/api/v1/admin", RegisterRoutesAdmin);
app.use("/api/utils", UtilityApi);

//Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerLoader()));

app.listen(port, () => {
    console.log(`Server is listen to http://localhost:${port}`);
});
