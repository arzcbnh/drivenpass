import { Credential } from "@prisma/client";
import { db } from "./database.js";

type CredentialCreate = Omit<Credential, "id">;

const { credential } = db;

function readByTitle(userId: number, title: string) {
    return credential.findFirst({
        where: { userId, title },
    });
}

function readByUserId(userId: number) {
    return credential.findMany({
        where: { userId },
    });
}

function readById(userId: number, id: number) {
    return credential.findMany({
        where: { userId, id },
    });
}

function createCredential(data: CredentialCreate) {
    return credential.create({ data });
}

export const CredentialRepository = {
    readByTitle,
    readByUserId,
    readById,
    createCredential,
};
