const connection = require("../db-config");

const db = connection.promise();

const getContact = async () => {
  try {
    const contact = await db.query("SELECT * FROM contact");
    const reseaux = await db.query("SELECT * FROM reseaux");
    const horaires = await db.query("SELECT * FROM horaires");

    return {
      ...contact[0][0],
      reseaux: reseaux[0],
      horaires: horaires[0],
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getContact,
};

// fusion des données de contact dans le footer
