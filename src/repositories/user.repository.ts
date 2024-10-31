import { User } from "@prisma/client";
import { db } from "./database.js";

type UserCreate = Omit<User, "id">;

const { user } = db;

function readByEmail(email: string) {
    return user.findUnique({
        where: { email },
    });
}

function createUser(data: UserCreate) {
    return user.create({ data });
}

export const UserRepository = {
    readByEmail,
    createUser,
};
