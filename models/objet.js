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

module.exports = {
  findObjet,
};
