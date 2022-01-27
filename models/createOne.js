const connection = require('../db-config');

const db = connection.promise();

const createArticle = ({
  titre,
  description,
  description2,
  description3,
  cls,
  bouton,
  id_pages,
  bloc_order,
}) => db
  .query(
    'INSERT INTO article (titre, description, description2, description3, cls, bouton, id_pages, bloc_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [
      titre,
      description,
      description2,
      description3,
      cls,
      bouton,
      id_pages,
      bloc_order,
    ],
  )
  .then(([result]) => {
    const id_article = result.insertId;
    return {
      id_article,
      titre,
      description,
      description2,
      description3,
      cls,
      bouton,
      id_pages,
      bloc_order,
    };
  });

const createAbonnement = ({});
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

module.exports = {
  createArticle,
};
