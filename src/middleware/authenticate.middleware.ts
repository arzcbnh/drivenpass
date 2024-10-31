import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UserService } from "#services";
import { PublicUser } from "#protocols";
import Cryptr from "cryptr";

const key = process.env.CRYPTO_KEY!;
const cryptr = new Cryptr(key);

function getToken(req: Request) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    return token ?? "";
}

export async function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = getToken(req);
    const user = jwt.verify(token, key) as PublicUser;
    const { passwordHash } = (await UserService.getByEmail(user.email))!;
    res.locals.user = { ...user, password: cryptr.decrypt(passwordHash) }
    next();
}
