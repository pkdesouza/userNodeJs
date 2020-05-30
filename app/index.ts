import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
dotenv.config();
import { Config } from "./config";

let port = new Config().port;
const app = express();

routes(app);

app.listen(port, () => console.log(`Server runnig on port ${port}.`));

export default app;
