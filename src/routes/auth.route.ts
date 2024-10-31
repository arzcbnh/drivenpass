import { AuthController } from "#controllers";
import { validateRequest } from "#middleware";
import { SignUpSchema } from "#schemas";
import { Router } from "express";

export const AuthRoute = Router();
AuthRoute.post("/sign-up", validateRequest(SignUpSchema), AuthController.signUp);