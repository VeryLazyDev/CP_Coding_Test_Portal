import Express from "express";
import { DBConnect } from "./common/database/db.mjs";
import example_api_user from "./user/api/example_api.mjs";
import example_api_admin from "./admin/api/example_api.mjs";
const app = Express();
const port = 8080;

//This need to run first time
DBConnect();
//Use as middleware for decoding json
app.use(Express.json());
app.use("/api/v1/user", example_api_user);
app.use("/api/v1/admin", example_api_admin);

app.listen(port, () => {
    console.log(`Server is listen to http://localhost:${port}`);
});
