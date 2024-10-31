import Joi from "joi";
import { SignInForm, SignUpForm } from "#protocols";

export const SignInSchema = Joi.object<SignInForm>({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

export const SignUpSchema = SignInSchema.append<SignUpForm>({
    name: Joi.string().required(),
});
