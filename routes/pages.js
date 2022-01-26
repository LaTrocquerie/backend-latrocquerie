const routerPages = require("express").Router();
const { findOne } = require("../models/pages");

// Route GET

routerPages.get("/:page", async (req, res) => {
  console.log(req.params.page);
  const result = await findOne(req.params.page);
  res.status(200).json(result);
});

// Route POST

routerPages.post("/:page", async (req, res) => {
  const result = await createOne(req.body);
  res.status(201).json(result);
});

module.exports = routerPages;

