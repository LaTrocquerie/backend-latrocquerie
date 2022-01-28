const routerPages = require("express").Router();
const { findOne, createOne } = require("../models/pages");

// Route GET

routerPages.get("/:page", async (req, res) => {
  const result = await findOne(req.params.page);
  // result.sort(findOne);
  // console.log(result);
  res.status(200).json(result);
});

// Route POST

routerPages.post("/:page", async (req, res) => {
  const result = await createOne(req.body);
  res.status(201).json(result);
});

module.exports = routerPages;
