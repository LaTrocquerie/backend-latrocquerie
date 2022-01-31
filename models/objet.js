const connection = require("../db-config");

const db = connection.promise();

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

// UPDATE UN OBJET

const updateObjetDetail = async (detail) => {
  return await db
    .query("UPDATE objets_details SET ? WHERE id_objets_details = ?", [
      detail,
      detail.id_objets_details,
    ])
    .then((res) => res)
    .catch((err) => console.log(err));
};

const updateObjet = async (data) => {
  try {
    const details = [...data.details];
    delete data.details;
    const objet = await db.query("UPDATE objets SET ? WHERE id_objets = ?", [
      data,
      data.id_objets,
    ]);

    const arr = await Promise.all(
      details.map(async (detail) => await updateCl(details))
    );
    console.log(arr);
    console.log(objet);
    return objet;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findObjet,
  updateObjet,
};
