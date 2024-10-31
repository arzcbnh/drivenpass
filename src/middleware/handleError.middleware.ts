import { ConflictError, NotFoundError } from "#error";
import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";

export const handleError: ErrorRequestHandler = (err, _1, res, _2) => {
    if (err instanceof ConflictError) {
        res.status(httpStatus.CONFLICT).send(err.message);
    } else if (err instanceof NotFoundError) {
        res.status(httpStatus.NOT_FOUND).send(err.message);
    } else {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        console.error(err);
    }
};
