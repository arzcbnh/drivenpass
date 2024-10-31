import { Credential } from "@prisma/client";
import { db } from "./database.js";

type CredentialCreate = Omit<Credential, "id">;

const { credential } = db;

function readByTitle(userId: number, title: string) {
    return credential.findFirst({
        where: { userId, title },
    });
}

function createCredential(data: CredentialCreate) {
    return credential.create({ data });
}

export const CredentialRepository = {
    readByTitle,
    createCredential,
};
