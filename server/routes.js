//Import ExpressJS server and routing functionality.
const { nextElementSibling } = require("domutils");
const express = require("express");
const router = express.Router();

//Import database helper functions.
const { searchAllProj, searchAllComic, searchAllGalleryImages, searchAllTechSkills,
        newProj, newComic, newGalleryImg, newTechSkill } = require('./db/helpers');

//Import authentication functions.
const { checkAuth } = require('./auth');

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

router.get('/Search/GalleryImage', (req, res) => {
  searchAllGalleryImages().then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})

router.get('/Search/TechSkill', (req, res) => {
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

router.post('/Add/Project', (req, res) => {
  if(checkAuth(req.url.split('?AuthKey=')[1])){
    if(req.body.link
      && req.body.description
      && req.body.name){
        newProj(req.body)
        .then((data) => {
          res.status(200).send(data);
        })
      }else{
        res.status(400).send(`Check your sent data! One or more parameters were not correctly
        labeled. Remember, a new project requires a 'link', 'description', and 'name.'`);
      }
  }else{
    res.status(403).send(`Incorrect key used for POST to portfolio database.
    Make sure that you are sending authentication as an in-query API key titled "AuthKey."`);
  }
})

router.post('/Add/Comic', (req, res) => {
  if(checkAuth(req.url.split('?AuthKey=')[1])){
    if(req.body.tag
      && req.body.description
      && req.body.name){
        newComic(req.body)
        .then((data) => {
          res.status(200).send(data);
        })
      }else{
        res.status(400).send(`Check your sent data! One or more parameters were not correctly
        labeled. Remember, a new comic requires a 'tag', 'description', and 'name.'`);
      }
  }else{
    res.status(403).send(`Incorrect key used for POST to portfolio database.
    Make sure that you are sending authentication as an in-query API key titled "AuthKey."`);
  }
})

router.post('/Add/GalleryImage', (req, res) => {
  if(checkAuth(req.url.split('?AuthKey=')[1])){
    if(req.body.link){
        newGalleryImg(req.body.link)
        .then((data) => {
          res.status(200).send(data);
        })
      }else{
        res.status(400).send(`Check your sent data! One or more parameters were not correctly
        labeled. Remember, a new gallery image requires a 'link.'`);
      }
  }else{
    res.status(403).send(`Incorrect key used for POST to portfolio database.
    Make sure that you are sending authentication as an in-query API key titled "AuthKey."`);
  }
})

router.post('/Add/TechSkill', (req, res) => {
  if(checkAuth(req.url.split('?AuthKey=')[1])){
    if(req.body.skill
      && req.body.skillType){
        newTechSkill(req.body.skill, req.body.skillType)
        .then((data) => {
          res.status(200).send(data);
        })
      }else{
        res.status(400).send(`Check your sent data! One or more parameters were not correctly
        labeled. Remember, a new tech skill requires a 'skill.'`);
      }
  }else{
    res.status(403).send(`Incorrect key used for POST to portfolio database.
    Make sure that you are sending authentication as an in-query API key titled "AuthKey."`);
  }
})

module.exports.routes = router;