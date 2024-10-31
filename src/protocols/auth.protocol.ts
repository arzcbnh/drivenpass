import { User } from "@prisma/client";

export type PublicUser = Omit<User, "passwordHash">;
export type SignUpForm = Pick<User, "name" | "email"> & { password: string };
export type SignInForm = Omit<SignUpForm, "name">;
