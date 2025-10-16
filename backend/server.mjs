import Express from "express";
import RegisterRoutesAdmin from "./admin/api/APIRegister.mjs";
import RegisterRoutesUser from "./user/api/APIRegister.mjs";
import Initializer from "./common/utils/initializer.mjs";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = Express();
const port = 8080;

//This will initialize all the require features
Initializer();

//Use as middleware for decoding json
app.use(Express.json());

//This is all the routes are define
app.use("/api/v1/user", RegisterRoutesUser);
app.use("/api/v1/admin", RegisterRoutesAdmin);

//Swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
            description: "API documentation for my project",
        },
    },
    apis: ["./user/api/*.mjs", "./admin/api/*.mjs"], // Path to your API routes with Swagger comments
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server is listen to http://localhost:${port}`);
});
