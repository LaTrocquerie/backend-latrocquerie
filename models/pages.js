const connection = require("../db-config");

const db = connection.promise();

const findArticle = async (id) => {
  try {
    const article = await db.query("SELECT * FROM article WHERE id_pages = ?", [
      id,
    ]);
    return article[0].map((article) => ({
      component: "article",
      data: article,
    }));
  } catch (error) {
    console.error(error);
  }
};

const findAbonnement = async (id) => {
  try {
    const abonnement = await db.query(
      "SELECT * FROM abonnements WHERE id_pages = ?",
      [id]
    );
    const abonnementDetail = [];
    for (let i = 0; i < abonnement[0].length; i++) {
      const detailsProvisoire = await db.query(
        "SELECT * FROM abonnements_details WHERE id_abonnements = ?",
        [abonnement[0][i].id_abonnements]
      );

      const aboProvisoire = {
        component: "abonnement",
        data: {
          ...abonnement[0][i],
          details: detailsProvisoire[0],
        },
      };
      abonnementDetail.push(aboProvisoire);
    }
    return abonnementDetail;
  } catch (error) {
    console.error(error);
  }
};

const findClient = async (id) => {
  try {
    const clients = await db.query("SELECT * FROM clients WHERE id_pages = ?", [
      id,
    ]);
    const clientsDetail = [];
    for (let i = 0; i < clients[0].length; i++) {
      const detailsProvisoire = await db.query(
        "SELECT * FROM clients_details WHERE id_clients = ?",
        [clients[0][i].id_clients]
      );
      const clientsProvisoire = {
        component: "client",
        data: {
          ...clients[0][i],
          details: detailsProvisoire[0],
        },
      };
      clientsDetail.push(clientsProvisoire);
    }
    return clientsDetail;
  } catch (error) {
    console.error(error);
  }
};

const findArticleImage = async (id) => {
  try {
    const articleimage = await db.query(
      "SELECT * FROM articleimage WHERE id_pages = ?",
      [id]
    );
    return articleimage[0].map((articleImage) => ({
      component: "articleImage",
      data: articleImage,
    }));
  } catch (error) {
    console.error(error);
  }
};

const findCategorie = async (id) => {
  try {
    const categorie = await db.query(
      "SELECT * FROM categorie WHERE id_pages = ?",
      [id]
    );
    const gommettes = [];
    for (let i = 0; i < categorie[0].length; i++) {
      const gommettesProvisoire = await db.query(
        "SELECT * FROM gommettes WHERE id_categorie = ?",
        [categorie[0][i].id_categorie]
      );
      const categorieProvisoire = {
        component: "categorie",
        data: {
          ...categorie[0][i],
          details: gommettesProvisoire[0],
        },
      };
      gommettes.push(categorieProvisoire);
    }
    return gommettes;
  } catch (error) {
    console.error(error);
  }
};

const findObjet = async (id) => {
  try {
    const objets = await db.query("SELECT * FROM objets WHERE id_pages = ?", [
      id,
    ]);
    const objetsDetail = [];
    for (let i = 0; i < objets[0].length; i++) {
      const detailsProvisoire = await db.query(
        "SELECT * FROM objets_details WHERE id_objets = ?",
        [objets[0][i].id_objets]
      );
      const objetsProvisoire = {
        component: "objets",
        data: {
          ...objets[0][i],
          details: detailsProvisoire[0],
        },
      };
      objetsDetail.push(objetsProvisoire);
    }
    return objetsDetail;
  } catch (error) {
    console.error(error);
  }
};

const findProduct = async (id) => {
  try {
    const products = await db.query(
      "SELECT * FROM products WHERE id_pages = ?",
      [id]
    );
    const productsDetail = [];
    for (let i = 0; i < products[0].length; i++) {
      const detailsProvisoire = await db.query(
        "SELECT * FROM products_details WHERE id_products = ?",
        [products[0][i].id_products]
      );
      const productsProvisoire = {
        component: "product",
        data: {
          ...products[0][i],
          details: detailsProvisoire[0],
        },
      };
      productsDetail.push(productsProvisoire);
    }
    return productsDetail;
  } catch (error) {
    console.error(error);
  }
};

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