<<<<<<< HEAD
const routerPages = require("express").Router();
const { findOne, createOne } = require("../models/pages");
=======
const routerPages = require('express').Router();
const { findOne, createOne } = require('../models/pages');
>>>>>>> c6a0eaa8fb47125a203732932b94a826fef5acec

// Route GET

routerPages.get('/:page', async (req, res) => {
  const result = await findOne(req.params.page);
  res.status(200).json(result);
});

// Route POST

routerPages.post('/:page', async (req, res) => {
  const result = await createOne(req.body);
  res.status(201).json(result);
});

module.exports = routerPages;
