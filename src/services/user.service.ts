import { EmailNotFoundError, UserAlreadyExistsError, WrongPasswordError } from "#error";
import { SignInForm, SignUpForm } from "#protocols";
import { UserRepository } from "#repositories";
import { EncryptionService } from "./encryption.service.js";

async function signUp({ name, email, password }: SignUpForm) {
    const user = await getByEmail(email);

    if (user != null) {
        throw new UserAlreadyExistsError(email);
    }

    const passwordHash = EncryptionService.encrypt(password);
    return UserRepository.createUser({ name, email, passwordHash });
}

async function signIn({ email, password }: SignInForm) {
    const user = await getByEmail(email);

    if (user == null) {
        throw new EmailNotFoundError(email);
    }

    if (password != EncryptionService.decrypt(user.passwordHash)) {
        throw new WrongPasswordError();
    }

    const { passwordHash: _, ...payload } = user;
    return EncryptionService.makeToken(payload);
}

function getByEmail(email: string) {
    return UserRepository.readByEmail(email);
}

function deleteUser(id: number) {
    return UserRepository.deleteUser(id);
}

export const UserService = {
    signUp,
    signIn,
    getByEmail,
    deleteUser,
};
