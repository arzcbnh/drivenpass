import { CredentialForm } from "#protocols";
import Joi from "joi";

export const CredentialSchema = Joi.object<CredentialForm>({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
});
