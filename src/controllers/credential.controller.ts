import { CredentialForm, PublicUser } from "#protocols";
import { CredentialService } from "#services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function postCredential(req: Request, res: Response) {
    const form = req.body as CredentialForm;
    const user = res.locals.user as PublicUser;
    await CredentialService.createCredential(user.id, form);
    res.sendStatus(httpStatus.CREATED);
}

export const CredentialController = {
    postCredential,
};
