import "reflect-metadata";
import express from 'express';
import router from "./routes";
import {handleError} from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

app.use(router)
app.use(handleError)


export default app