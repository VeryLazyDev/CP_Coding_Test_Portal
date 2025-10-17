import { DBConnect } from "../database/database.mjs";
import { generateSecret } from "./authentication.mjs";

export default function Initializer() {
    DBConnect();
    generateSecret();
}
