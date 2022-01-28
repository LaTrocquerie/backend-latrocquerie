const findArticle = require("./article");
const findAbonnement = require("./abonnement");
const findClient = require("./client");
const findArticleImage = require("./articleImage");
const findCategorie = require("./categorie");
const findObjet = require("./objet");
const findProduct = require("./product");
// import { findArticle } from "./article";
// import { findAbonnement } from "./abonnement";
// import { findClient } from "./client";
// import { findArticleImage } from "./articleImage";
// import { findCategorie } from "./categorie";
// import { findObjet } from "./objet";
// import { findProduct } from "./product";

const connection = require("../db-config");

const db = connection.promise();
const findOne = async (nomdepage) => {
  try {
    const page = await db.query("SELECT * FROM pages WHERE nom = ?", [
      nomdepage,
    ]);
    const article = await findArticle(page[0][0].id_pages);
    const abonnement = await findAbonnement(page[0][0].id_pages);
    const clients = await findClient(page[0][0].id_pages);
    const articleImage = await findArticleImage(page[0][0].id_pages);
    const categorie = await findCategorie(page[0][0].id_pages);
    const objets = await findObjet(page[0][0].id_pages);
    const products = await findProduct(page[0][0].id_pages);
    return {
      page: page[0][0],
      components: [
        ...article,
        ...abonnement,
        ...clients,
        ...articleImage,
        ...categorie,
        ...objets,
        ...products,
      ],
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findOne,
};
