import jwt from "jsonwebtoken";
import Cryptr from "cryptr";

const secret = process.env.SECRET!;
const cryptr = new Cryptr(secret);

function encrypt(str: string) {
    return cryptr.encrypt(str);
}

function decrypt(str: string) {
    return cryptr.decrypt(str);
}

function makeToken(payload: string | Buffer | object) {
    return jwt.sign(payload, secret);
}

function verifyToken(token: string) {
    return jwt.verify(token, secret);
}

export const EncryptionService = {
    encrypt,
    decrypt,
    makeToken,
    verifyToken,
};
