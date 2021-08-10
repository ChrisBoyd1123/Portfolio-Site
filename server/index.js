const express = require("express");
const bodyParser = require('body-parser');

const { routes } = require('./routes.js');
const { db } = require('./db/index');

require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use('/', express.static('dist/portfolio-site'));
app.use('/api', routes);

const { newProjLink, searchOneProjLink } = require('./db/helpers.js');

db().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
})