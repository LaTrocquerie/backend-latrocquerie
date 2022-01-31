const routerPages = require("express").Router();
const { findOne, createOne } = require("../models/pages");

// Route GET

routerPages.get("/:page", async (req, res) => {
  const result = await findOne(req.params.page);
  console.log(result);
  if (result) {
    result.components.sort((a, b) => a.data.bloc_order - b.data.bloc_order);
    res.status(200).json(result);
  } else {
    res.status(404).send("Page introuvable");
  }
});

// Route POST

routerPages.post("/:page", async (req, res) => {
  const result = await createOne(req.body);
  res.status(201).json(result);
});

module.exports = routerPages;
