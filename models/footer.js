const connection = require("../db-config");

const db = connection.promise();

const getContact = async (id) => {
  try {
    const contact = await db.query("SELECT * FROM contact WHERE id_pages = ?", [
      id,
    ]);
    const reseaux = [];
    for (let i = 0; i < contact[0].length; i++) {
      const reseauxProvisoire = await db.query(
        "SELECT * FROM reseaux WHERE id_contact = ?",
        [contact[0][i].id_contact]
      );
      const contactProvisoire = {
        contact: contact[0][i],
        details: reseauxProvisoire[0],
      };
      reseaux.push(contactProvisoire);
    }
    return reseaux;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getContact,
};
