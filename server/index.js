const express = require("express");
const bodyParser = require('body-parser');

const { routes } = require('./routes.js');
const { db } = require('./db/index');

require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
const angularPages = ['/', '/landing-page/home', '/landing-page/contact', '/software/home',
'/software/tech', '/software/soft', '/software/projects', '/software/contact',
'/illustration/home', '/illustration/gallery', '/illustration/comics',
'/illustration/commissions', '/illustration/contact']
angularPages.forEach((pageRoute, pageRouteIndex) => {
    app.use(pageRoute, express.static('dist/portfolio-site'));
})
app.use('/api', routes);

const { newProjLink, searchOneProjLink } = require('./db/helpers.js');

db().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
})