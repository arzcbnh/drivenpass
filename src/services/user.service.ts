import { UserAlreadyExistsError } from "#error";
import { SignInForm, SignUpForm } from "#protocols";
import { UserRepository } from "#repositories";
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

export const UserService = {
    signUp,
};
