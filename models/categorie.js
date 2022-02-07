const connection = require("../db-config");

const db = connection.promise();

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

// UPDATE UNE CATEGORIE

const updateGommette = async (detail) => {
  return await db
    .query("UPDATE gommettes SET ? WHERE id_gommettes = ?", [
      detail,
      detail.id_gommettes,
    ])
    .then((res) => res)
    .catch((err) => console.log(err));
};

const updateCategorie = async (data) => {
  try {
    const details = [...data.details];
    delete data.details;
    const categorie = await db.query(
      "UPDATE categorie SET ? WHERE id_categorie = ?",
      [data, data.id_categorie]
    );

    const arr = await Promise.all(
      details.map(async (detail) => await updateGommette(details))
    );
    console.log(arr);
    console.log(categorie);
    return categorie;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findCategorie,
  updateCategorie,
};
