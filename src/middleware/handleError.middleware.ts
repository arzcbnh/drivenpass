import { ConflictError, NotFoundError, UnauthorizedError } from "#error";
import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";

export const handleError: ErrorRequestHandler = (err, _1, res, _2) => {
    if (err instanceof ConflictError) {
        res.status(httpStatus.CONFLICT).send(err.message);
    } else if (err instanceof NotFoundError) {
        res.status(httpStatus.NOT_FOUND).send(err.message);
    } else if (err instanceof UnauthorizedError) {
        res.status(httpStatus.UNAUTHORIZED).send(err.message);
    } else if (err instanceof jwt.JsonWebTokenError) {
        res.status(httpStatus.UNAUTHORIZED).send("Invalid token.");
    } else {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        console.error(err);
    }
};
