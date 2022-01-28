const routerHeader = require('express').Router();
const { getHeader, createHeader } = require('../models/header');

// Route GET

routerHeader.get('/', async (req, res) => {
  const result = await getHeader();
  res.status(200).json(result);
});

// Route POST

routerHeader.post('/', async (req, res) => {
  const result = await createHeader(req.body);
  res.status(201).json(result);
});

module.exports = routerHeader;
