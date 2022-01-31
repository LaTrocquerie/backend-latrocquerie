const routerPages = require("express").Router();
const { findOne, createOne } = require("../models/pages");
const { updateArticle } = require("../models/article");

// Route GET

routerPages.get("/:page", async (req, res) => {
  const result = await findOne(req.params.page);
  result.components.sort((a, b) => {
    return a.data.bloc_order - b.data.bloc_order;
  });

  res.status(200).json(result);
});

// Route POST

routerPages.post("/:page", async (req, res) => {
  const result = await createOne(req.body);

  res.status(201).json(result);
});

// Rouet PUT

routerPages.put("/component", async (req, res) => {
  // console.log(req.body);

  const component = {
    article: await updateArticle(req.body.data),
  };
  const result = await component[req.body.component];
  res.status(204).json(result);
});

module.exports = routerPages;
