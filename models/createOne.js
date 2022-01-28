// const connection = require("../db-config");

// const db = connection.promise();

// const createArticle = ({
//   titre,
//   description,
//   description2,
//   description3,
//   url,
//   cls,
//   bouton,
// }) => {
//   return db
//     .query(
//       "INSERT INTO article (titre, description, description2, description3, cls, bouton) VALUES (?, ?, ?, ?, ?, ?)",
//       [titre, description, description2, description3, url, cls, bouton]
//     )
//     .then((result) => {
//       const id_article = result.insertId;
//       return {
//         id_article,
//         titre,
//         description,
//         description2,
//         description3,
//         url,
//         cls,
//         bouton,
//       };
//     });
// };

// const createAbonnement = {};
// const createOne = async (elementPage) => {
//   try {
//     const article = await db.query("INSERT INTO page (id_pages, titre, description, to, nom, cls) VALUES (?, ?, ?, ?, ?, ?)", [elementPage],
//     );
//     const article = await createArticle(page[0][0].id)
//     return {
//       component: [...article[0]],
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

// const createOne = async (elementPage) => {
//   try {
//     const page = await db.query("INSERT INTO pages WHERE id_pages = ?", [
//       elementPage,
//     ]);
//     const article = await createArticle(page[0][0].id_pages);
//     const abonnement = await createAbonnement(page[0][0].id_pages);
//     const clients = await createClient(page[0][0].id_pages);
//     const articleImage = await createArticleImage(page[0][0].id_pages);
//     const categorie = await createCategorie(page[0][0].id_pages);
//     const objets = await createObjet(page[0][0].id_pages);
//     const products = await createProduct(page[0][0].id_pages);
//     return {
//       page: page[0][0],
//       components: [
//         ...article,
//         ...abonnement,
//         ...clients,
//         ...articleImage,
//         ...categorie,
//         ...objets,
//         ...products,
//       ],
//     };
//   } catch (error) {
//     console.error(error);
//   }
// };

module.exports = {
  createOne,
};
