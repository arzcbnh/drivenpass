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

async function getAllCredentials(_: Request, res: Response) {
    const user = res.locals.user as PublicUser;
    const credentials = await CredentialService.getAllCredentials(user.id);
    res.send(credentials);
}

async function getCredential(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = res.locals.user as PublicUser;

    if (isNaN(id)) {
        return void res.sendStatus(httpStatus.BAD_REQUEST);
    }

    const credential = await CredentialService.getCredential(user.id, id);

    if (credential[0] == null) {
        res.sendStatus(httpStatus.NOT_FOUND);
    } else {
        res.send(credential[0]);
    }
}

async function putCredential(req: Request, res: Response) {
    const form = req.body as CredentialForm;
    const user = res.locals.user as PublicUser;
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return void res.sendStatus(httpStatus.BAD_REQUEST);
    }

    await CredentialService.editCredential(id, user.id, form);
    res.sendStatus(httpStatus.NO_CONTENT);
}

async function deleteCredential(req: Request, res: Response) {
    const user = res.locals.user as PublicUser;
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return void res.sendStatus(httpStatus.BAD_REQUEST);
    }

    await CredentialService.deleteCredential(user.id, id);
    res.sendStatus(httpStatus.NO_CONTENT);
}

export const CredentialController = {
    postCredential,
    getAllCredentials,
    getCredential,
    putCredential,
    deleteCredential,
};
