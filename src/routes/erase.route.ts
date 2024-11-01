import { authenticate } from "#middleware";
import { PublicUser } from "#protocols";
import { CredentialService, UserService } from "#services";
import { Request, Response, Router } from "express";
import httpStatus from "http-status";

export const EraseRoute = Router();
EraseRoute.use(authenticate);
EraseRoute.delete("/erase", async (req: Request, res: Response) => {
    const user = res.locals.user as PublicUser;
    await CredentialService.deleteAll(user.id);
    await UserService.deleteUser(user.id);
    res.sendStatus(httpStatus.NO_CONTENT);
});
