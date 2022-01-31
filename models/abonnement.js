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

const updateAbonnementDetail = async (detail) => {
  return await db
    .query(
      "UPDATE abonnements_details SET ? WHERE id_abonnements_details = ?",
      [detail, detail.id_abonnements_details]
    )
    .then((res) => res)
    .catch((err) => console.log(err));
};

const updateAbonnement = async (data) => {
  try {
    const details = [...data.details];
    delete data.details;
    console.log(data);
    console.log(details);
    const abonnement = await db.query(
      "UPDATE abonnements SET ? WHERE id_abonnements = ?",
      [data, data.id_abonnements]
    );

    const arr = await Promise.all(
      details.map(async (detail) => await updateAbonnementDetail(details))
    );
    console.log(arr);
    console.log(abonnement);
    return abonnement;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findAbonnement,
  updateAbonnement,
};
