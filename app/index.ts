import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();
import database from './config/database';
let port = process.env.port || 9000;
const app = express();

database();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => console.log(`Server runnig on port ${port}.`));

export default app;
