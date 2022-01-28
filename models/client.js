// const connection = require("../db-config");

// const db = connection.promise();

// // const findClient = async (id) => {
// //   try {
// //     const clients = await db.query("SELECT * FROM clients WHERE id_pages = ?", [
// //       id,
// //     ]);
// //     const clientsDetail = [];
// //     for (let i = 0; i < clients[0].length; i++) {
// //       const detailsProvisoire = await db.query(
// //         "SELECT * FROM clients_details WHERE id_clients = ?",
// //         [clients[0][i].id_clients]
// //       );
// //       const clientsProvisoire = {
// //         component: "client",
// //         data: {
// //           ...clients[0][i],
// //           details: detailsProvisoire[0],
// //         },
// //       };
// //       clientsDetail.push(clientsProvisoire);
// //     }
// //     return clientsDetail;
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };

// module.exports = {
//   findClient,
// };
