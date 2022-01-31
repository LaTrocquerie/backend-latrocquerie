const connection = require("../db-config");

const db = connection.promise();

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

// const updateAbonnement = async (body) => {
//   console.log(body);
//   db.query("UPDATE abonnements SET ? WHERE id_abonnements = ?", [])
//     .then((result) => {
//       res.send("Abonnement correctement mis à jour !");
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

module.exports = {
  findAbonnement,
  //updateAbonnement,
};
