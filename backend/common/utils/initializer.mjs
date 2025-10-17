import { DBConnect } from "../database/database.mjs";
import { generateSecret } from "./authManager.mjs";

export default function Initializer() {
    DBConnect();
    generateSecret();
}
