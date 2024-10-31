import { User } from "@prisma/client";

export type PublicUser = Omit<User, "passwordHash">;
export type SignInForm = Pick<User, "name" | "email">;
export type SignUpForm = SignInForm & { password: string };
