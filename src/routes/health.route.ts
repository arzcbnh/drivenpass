import { Router, Response } from "express";

export const HealthRoute = Router();
HealthRoute.get("/health", (_, res: Response) => void res.send("I'm ok!"));
