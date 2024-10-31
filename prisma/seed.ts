import { db } from "#repositories";
import Cryptr from "cryptr";

const key = process.env.CRYPTO_KEY!;
const cryptr = new Cryptr(key);

await db.user.create({
    data: {
        name: "Demo",
        email: "demo@driven.com.br",
        passwordHash: cryptr.encrypt("demo123"),
    },
});

try {
    await db.$disconnect();
} catch (err) {
    console.error(err);
    await db.$disconnect();
    process.exit(1);
}
