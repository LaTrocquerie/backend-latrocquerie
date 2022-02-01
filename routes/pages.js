const routerPages = require("express").Router();
const { findOne, createOne } = require("../models/pages");
const { updateArticle } = require("../models/article");
const { updateArticleImage } = require("../models/articleImage");
const { updateAbonnement } = require("../models/abonnement");
const { updateClient } = require("../models/client");
const { updateObjet } = require("../models/objet");
const { updateProduct } = require("../models/product");
const { updateCategorie } = require("../models/categorie");

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

routerPages.post("/component", async (req, res) => {
  const component = {};

  const result = await component[req.body];
  res.status(201).json(result);
});

// Route PUT

routerPages.put("/component", async (req, res) => {
  console.log(req.body.component);

  const component = {
    article: async () => await updateArticle(req.body.data),
    articleImage: async () => await updateArticleImage(req.body.data),
    abonnement: async () => await updateAbonnement(req.body.data),
    categorie: async () => await updateCategorie(req.body.data),
    client: async () => await updateClient(req.body.data),
    objet: async () => await updateObjet(req.body.data),
    product: async () => await updateProduct(req.body.data),
  };
  const result = await component[req.body.component];
  res.status(201).json(result);
});

module.exports = routerPages;
