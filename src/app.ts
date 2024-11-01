import express, { json } from "express";
import { handleError } from "#middleware";
import * as routes from "#routes";

const app = express();
app.use(json());

app.use(routes.HealthRoute);
app.use(routes.AuthRoute);
app.use(routes.CredentialRoute);
app.use(routes.EraseRoute);
app.use(handleError);

const port = process.env.PORT ?? 5000;
app.listen(port, () => console.log("Listening to port " + port));
