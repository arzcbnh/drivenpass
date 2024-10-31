import { CredentialAlreadyExistsError } from "#error";
import { CompleteUser, CredentialForm } from "#protocols";
import { CredentialRepository } from "#repositories";
import Cryptr from "cryptr";

async function createCredential(user: CompleteUser, form: CredentialForm) {
    const credential = await CredentialRepository.readByTitle(user.id, form.title);

    if (credential != null) {
        throw new CredentialAlreadyExistsError(form.title);
    }

    const cryptr = new Cryptr(user.password);
    const { password, ...data } = form;
    const passwordHash = cryptr.encrypt(password);

    return CredentialRepository.createCredential({...data, passwordHash, userId: user.id})
}

export const CredentialService = {
    createCredential
}
