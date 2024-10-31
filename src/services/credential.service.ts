import { CredentialAlreadyExistsError } from "#error";
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

    return CredentialRepository.createCredential({...data, passwordHash, userId})
}

export const CredentialService = {
    createCredential
}
