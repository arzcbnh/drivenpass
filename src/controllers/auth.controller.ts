import { SignInForm, SignUpForm } from "#protocols";
import { UserService } from "#services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function signUp(req: Request, res: Response) {
    const form = req.body as SignUpForm;
    await UserService.signUp(form);
    res.sendStatus(httpStatus.OK);
}

async function signIn(req: Request, res: Response) {
    const form = req.body as SignInForm;
    const token = await UserService.signIn(form);
    res.send(token);
}

export const AuthController = {
    signUp,
    signIn,
};
