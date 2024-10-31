import express, { json } from "express";
import { handleError } from "#middleware";
import * as routes from "#routes";

const app = express();
app.use(json());

Object.values(routes).forEach(route => app.use(route));
app.use(handleError);

const port = process.env.PORT ?? 5000;
app.listen(port, () => console.log("Listening to port " + port));
