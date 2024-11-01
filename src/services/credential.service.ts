import { CredentialAlreadyExistsError, CredentialNotFoundError } from "#error";
import { CredentialForm } from "#protocols";
import { CredentialRepository } from "#repositories";
import { EncryptionService } from "./encryption.service.js";

async function createCredential(userId: number, form: CredentialForm) {
    const credential = await CredentialRepository.readByTitle(userId, form.title);

    if (credential != null) {
        throw new CredentialAlreadyExistsError(form.title);
    }

    const { password, ...data } = form;
    const passwordHash = EncryptionService.encrypt(password);

    return CredentialRepository.createCredential({ ...data, passwordHash, userId });
}

async function getAllCredentials(userId: number) {
    const credentials = await CredentialRepository.readByUserId(userId);
    return credentials;
}

async function getCredential(userId: number, id: number) {
    const credential = await CredentialRepository.readById(userId, id);
    return credential;
}

async function editCredential(id: number, userId: number, form: CredentialForm) {
    const credential = await CredentialRepository.readById(userId, id);

    if (credential == null) {
        throw new CredentialNotFoundError(id);
    }

    const { password, ...data } = form;
    const passwordHash = EncryptionService.encrypt(password);

    return CredentialRepository.update(id, { ...data, passwordHash, userId });
}

async function deleteCredential(userId: number, id: number) {
    const credential = await CredentialRepository.readById(userId, id);

    if (credential == null) {
        throw new CredentialNotFoundError(id);
    }

    return CredentialRepository.deleteById(id);
}

export const CredentialService = {
    createCredential,
    getAllCredentials,
    getCredential,
    editCredential,
    deleteCredential,
};
