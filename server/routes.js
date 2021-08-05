//Import ExpressJS server and routing functionality.
const { nextElementSibling } = require("domutils");
const express = require("express");
const router = express.Router();

//Import database helper functions.
const { searchAllProj, searchAllComic, searchAllGalleryImages, searchAllTechSkills,
        newProj, newComic, newGalleryImg, newTechSkill } = require('./db/helpers');

// * // * // * //
//ROUTING - GET REQUESTS
// * // * // * //

router.get('/Search', (req, res, next) => {
  console.log('successful GET request.');
  next();
})

router.get('/Search/Project', (req, res) => {
  searchAllProj().then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})

router.get('/Search/GalleryImages', (req, res) => {
  searchAllGalleryImages().then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})

router.get('/Search/TechSkills', (req, res) => {
  searchAllTechSkills().then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})

router.get('/Search/Comic', (req, res) => {
  searchAllComic().then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})

// * // * // * //
//ROUTING - POST REQUESTS
// * // * // * //

router.post('/Add', (req, res, next) => {
  console.log('successful POST request.');
  next();
})

module.exports.routes = router;