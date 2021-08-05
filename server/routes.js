//Import ExpressJS server and routing functionality.
const { nextElementSibling } = require("domutils");
const express = require("express");
const router = express.Router();

//Import database helper functions.
const { searchAllProject, searchAllComic, searchAllGalleryImages, searchAllTechSkills,
        newProj, newComic, newGalleryImg, newTechSkill } = require('./db/helpers');

// * // * // * //
//ROUTING - GET REQUESTS
// * // * // * //

router.get('/', (req, res, next) => {
  console.log('successful GET request.');
  next();
})

// * // * // * //
//ROUTING - POST REQUESTS
// * // * // * //

router.post('/', (req, res, next) => {
  console.log('successful POST request.');
  next();
})

module.exports.routes = router;