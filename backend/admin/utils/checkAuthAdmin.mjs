export function checkAuthorization(res, authorization) {
    //Check authorization header
    if (!authorization) {
        res.status(401).json({ error: "Authorization header missing" });
        return false;
    }
    //check authorization format
    const parts = authorization.split(" ");
    if (parts.length !== 2) {
        res.status(400).json({ error: "Invalid authorization header format" });
        return false;
    }
    //check the bearer scheme
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        res.status(400).json({ error: "Expected Bearer scheme" });
        return false;
    }
    //check token existence
    if (!token || token.trim() === "") {
        res.status(400).json({ error: "Token is empty" });
        return false;
    }
    //verify token
    const verify = verifyToken(token);
    if (!verify) {
        res.status(401).json({ error: "Unauthorize Token" });
        return false;
    }
    return true;
}
