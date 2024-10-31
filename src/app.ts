import express, { json } from "express";
import * as routes from "#routes";

const app = express();
app.use(json());

Object.values(routes).forEach(route => app.use(route));

const port = process.env.PORT ?? 5000;
app.listen(port, () => console.log("Listening to port " + port));
