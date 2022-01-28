// const connection = require("../db-config");

// const db = connection.promise();

// const findCategorie = async (id) => {
//   try {
//     const categorie = await db.query(
//       "SELECT * FROM categorie WHERE id_pages = ?",
//       [id]
//     );
//     const gommettes = [];
//     for (let i = 0; i < categorie[0].length; i++) {
//       const gommettesProvisoire = await db.query(
//         "SELECT * FROM gommettes WHERE id_categorie = ?",
//         [categorie[0][i].id_categorie]
//       );
//       const categorieProvisoire = {
//         component: "categorie",
//         data: {
//           ...categorie[0][i],
//           details: gommettesProvisoire[0],
//         },
//       };
//       gommettes.push(categorieProvisoire);
//     }
//     return gommettes;
//   } catch (error) {
//     console.error(error);
//   }
// };

// module.exports = {
//   findCategorie,
// };
