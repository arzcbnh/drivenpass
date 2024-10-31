import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

const key = process.env.CRYPTO_KEY!;

function getToken(req: Request) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    return token ?? "";
}

export async function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = getToken(req);
    const user = jwt.verify(token, key);
    res.locals.user = user;
    next();
}
