import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
dotenv.config();
import database from './config/database';

let port = process.env.port || 9000;
const app = express();

database();
routes(app);

app.listen(port, () => console.log(`Server runnig on port ${port}.`));

export default app;
