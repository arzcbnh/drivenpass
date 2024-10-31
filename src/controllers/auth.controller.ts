import { SignUpForm } from "#protocols";
import { UserService } from "#services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function signUp(req: Request, res: Response) {
    const form = req.body as SignUpForm;
    await UserService.signUp(form);
    res.sendStatus(httpStatus.OK);
}

export const AuthController = {
    signUp,
};
