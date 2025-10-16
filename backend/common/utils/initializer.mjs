import { DBConnect } from "../database/db.mjs";
import { generateSecret } from "./authManager.mjs";

export default function Initializer() {
    DBConnect();
    generateSecret();
}
