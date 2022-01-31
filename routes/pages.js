const routerPages = require("express").Router();
const { findOne, createOne } = require("../models/pages");
const { updateArticle } = require("../models/article");
const { updateArticleImage } = require("../models/articleImage");
const { updateAbonnement } = require("../models/abonnement");

// Route GET

routerPages.get("/:page", async (req, res) => {
  const result = await findOne(req.params.page);
  console.log(result);
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
  console.log(req.body.component);

  const component = {
    article: async () => await updateArticle(req.body.data),
    articleImage: async () => await updateArticleImage(req.body.data),
    abonnement: async () => await updateAbonnement(req.body.data),
  };
  const result = await component[req.body.component]();
  res.status(201).json(result);
});

module.exports = routerPages;
