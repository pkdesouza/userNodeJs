const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');
dotenv.config();

const { port } = require('./config');

const app = express();

routes(app);

app.listen(port, () => console.log(`Server runnig on port ${port}.`));

module.exports = app;
