import { CredentialAlreadyExistsError } from "#error";
import { CompleteUser, CredentialForm } from "#protocols";
import { CredentialRepository } from "#repositories";
import Cryptr from "cryptr";

const key = process.env.CRYPTO_KEY!;
const cryptr = new Cryptr(key);

async function createCredential(user: CompleteUser, form: CredentialForm) {
    const credential = await CredentialRepository.readByTitle(user.id, form.title);

    if (credential != null) {
        throw new CredentialAlreadyExistsError(form.title);
    }

    const { password, ...data } = form;
    const passwordHash = cryptr.encrypt(password);

    return CredentialRepository.createCredential({...data, passwordHash, userId: user.id})
}

export const CredentialService = {
    createCredential
}
