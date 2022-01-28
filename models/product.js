// const connection = require("../db-config");

// const db = connection.promise();

// const findProduct = async (id) => {
//   try {
//     const products = await db.query(
//       "SELECT * FROM products WHERE id_pages = ?",
//       [id]
//     );
//     const productsDetail = [];
//     for (let i = 0; i < products[0].length; i++) {
//       const detailsProvisoire = await db.query(
//         "SELECT * FROM products_details WHERE id_products = ?",
//         [products[0][i].id_products]
//       );
//       const productsProvisoire = {
//         component: "product",
//         data: {
//           ...products[0][i],
//           details: detailsProvisoire[0],
//         },
//       };
//       productsDetail.push(productsProvisoire);
//     }
//     return productsDetail;
//   } catch (error) {
//     console.error(error);
//   }
// };

// module.exports = {
//   findProduct,
// };
