import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
let SECRET_KEY = null;
let SALTS = 10;
export function generateSecret(size = 32) {
    const randomBytes = crypto.randomBytes(size);
    SECRET_KEY = randomBytes.toString("base64");
}

export function createToken(userid, username, name, email, team, role) {
    const payload = {
        userid,
        username,
        name,
        email,
        team,
        role,
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
        return decode;
    } catch (e) {
        console.error("Invalid Token", e.message);
        return null;
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

export function checkAuthorization(authorization, user = false) {
    try {
        //Check authorization header
        if (!authorization) {
            return {
                auth: false,
                status: 401,
                error: "Authorization header missing",
            };
        }
        //check authorization format
        const parts = authorization.split(" ");
        if (parts.length !== 2) {
            return {
                auth: false,
                status: 400,
                error: "Invalid authorization header format",
            };
        }
        //check the bearer scheme
        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme)) {
            return {
                auth: false,
                status: 400,
                error: "UnExpected Bearer scheme",
            };
        }
        //check token existence
        if (!token || token.trim() === "") {
            return { auth: false, status: 400, error: "Token is empty" };
        }
        //verify token
        const verify = verifyToken(token);
        if (!verify) {
            return { auth: false, status: 401, error: "Unauthorize Token" };
        }
        //check role
        if (verify.role !== "Admin" && !user) {
            return {
                auth: false,
                status: 401,
                error: "Only admin can access this feature",
            };
        }
        return {
            auth: true,
            status: 200,
            team: verify.team,
            role: verify.role,
            userId: verify.userid,
        };
    } catch (e) {
        return { auth: false, status: 500, error: "Internal Server Error" };
    }
}
