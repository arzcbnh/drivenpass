import { CredentialController } from "#controllers";
import { authenticate, validateRequest } from "#middleware";
import { CredentialSchema } from "#schemas";
import { Router } from "express";

export const CredentialRoute = Router();
CredentialRoute.use(authenticate);
CredentialRoute.post("/credentials", validateRequest(CredentialSchema), CredentialController.postCredential);
