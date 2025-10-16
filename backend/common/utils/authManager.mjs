import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
let SECRET_KEY = null;
let SALTS = 10;
export function generateSecret(size = 32) {
    const randomBytes = crypto.randomBytes(size);
    SECRET_KEY = randomBytes.toString("base64");
}

export function createToken(userid, username, team) {
    const payload = {
        userid,
        username,
        team,
    };
    const options = {
        expiresIn: "1h",
        issuer: "cp_coding_test",
    };
    const token = jwt.sign(payload, SECRET_KEY);
    return token;
}

export function verifyToken(token) {
    try {
        const decode = jwt.verify(token, SECRET_KEY);
        return true;
    } catch (e) {
        console.error("Invalid Token", e.message);
        return false;
    }
}

export async function hashPassword(password) {
    const hashed = await bcrypt.hash(password, SALTS);
    return hashed;
}

export async function verifyPassword(password, hashedPassword) {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}
