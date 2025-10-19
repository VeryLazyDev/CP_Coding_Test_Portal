import Express from "express";
import RegisterRoutesAdmin from "./api/admin/APIRegisterAdmin.mjs";
import RegisterRoutesUser from "./api/user/APIRegisterUser.mjs";
import UtilityApi from "./api/utilityApi.mjs";

const app = Express();
const port = 8080;

//This will initialize all the require features
Initializer();

//Use as middleware for decoding json
app.use(Express.json());

//This is where all the routes are define
app.use("/api/v1/user", RegisterRoutesUser);
app.use("/api/v1/admin", RegisterRoutesAdmin);
app.use("/api/utils", UtilityApi);

app.listen(port, () => {
    console.log(`Server is listen to http://localhost:${port}`);
});
