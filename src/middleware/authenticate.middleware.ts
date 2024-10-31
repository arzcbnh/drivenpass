import { NextFunction, Request, Response } from "express";
import { EncryptionService } from "#services";

function getToken(req: Request) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    return token ?? "";
}

export async function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = getToken(req);
    const user = EncryptionService.verifyToken(token);
    res.locals.user = user;
    next();
}
