import { EmailNotFoundError, UserAlreadyExistsError, WrongPasswordError } from "#error";
import { SignInForm, SignUpForm } from "#protocols";
import { UserRepository } from "#repositories";
import jwt from "jsonwebtoken";
import Cryptr from "cryptr";

const key = process.env.CRYPTO_KEY!;
const cryptr = new Cryptr(key);

async function signUp({ name, email, password }: SignUpForm) {
    const user = await UserRepository.readByEmail(email);

    if (user != null) {
        throw new UserAlreadyExistsError(email);
    }

    return UserRepository.createUser({ name, email, passwordHash: cryptr.encrypt(password) });
}

async function signIn({ email, password }: SignInForm) {
    const user = await UserRepository.readByEmail(email);

    if (user == null) {
        throw new EmailNotFoundError(email);
    }

    if (password != cryptr.decrypt(user.passwordHash)) {
        throw new WrongPasswordError();
    }

    return jwt.sign({ email, name: user.name }, key);
}

export const UserService = {
    signUp,
    signIn,
};
