import { User } from "@prisma/client";

export interface SignInForm {
    email: string;
    password: string;
}

export interface SignUpForm extends SignInForm {
    name: string;
}

export type PublicUser = Omit<User, "passwordHash">

export type CompleteUser = SignUpForm & { id: number };
