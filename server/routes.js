//Import ExpressJS server and routing functionality.
const express = require("express");
const router = express.Router();

//Import Node path module.
const path = require('path');

router.get('/', (req, res) => {
  res.status(200).send('successful GET request.')
})

module.exports.routes = router;