import merge from "lodash.merge";
import { DBConnect } from "../database/database.mjs";
import { generateSecret } from "./authentication.mjs";
import YAML from "yamljs";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default function Initializer() {
    DBConnect();
    generateSecret();
}

export function swaggerLoader() {
    const docsPathUser = path.resolve(__dirname, "../docs/user");
    const docsPathAdmin = path.resolve(__dirname, "../docs/admin");
    const swaggerAdminAuth = YAML.load(`${docsPathAdmin}/adminAuth.yml`);
    const swaggerUserAnswers = YAML.load(`${docsPathUser}/userAnswers.yml`);
    const swaggerUserQuestions = YAML.load(`${docsPathUser}/questions.yml`);
    const swaggerUserAuth = YAML.load(`${docsPathUser}/userAuth.yml`);
    const swaggerDocs = merge(
        {
            openapi: "3.0.3",
            info: {
                title: "CP Coding Test",
                version: "1.0.0",
                description: "API documentation for CP Coding Test",
            },
        },
        swaggerAdminAuth,
        swaggerUserAnswers,
        swaggerUserQuestions,
        swaggerUserAuth,
    );
    return swaggerDocs;
}
