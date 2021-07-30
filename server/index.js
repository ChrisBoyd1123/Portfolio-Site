const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const { routes } = require('./routes.js');

require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});