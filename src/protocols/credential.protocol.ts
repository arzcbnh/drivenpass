import { Credential } from "@prisma/client";

export type CredentialForm = Pick<Credential, "title" | "url" | "username"> & { password: string };
