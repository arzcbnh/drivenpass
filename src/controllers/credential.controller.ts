import { CompleteUser, CredentialForm } from "#protocols";
import { CredentialService } from "#services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function postCredential(req: Request, res: Response) {
    const form = req.body as CredentialForm;
    const user = res.locals.user as CompleteUser;
    await CredentialService.createCredential(user, form);
    res.sendStatus(httpStatus.CREATED);
}

export const CredentialController = {
    postCredential
}
