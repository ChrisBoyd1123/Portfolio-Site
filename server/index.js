const express = require("express");
const bodyParser = require('body-parser');

const { routes } = require('./routes.js');
const { db } = require('./db/index');

require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

db().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
})