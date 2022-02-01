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

// UPDATE LES INFOS et HORAIRES

// const updateHoraires = async (detail) => {
//   return await db
//     .query("UPDATE horaires SET ? WHERE id_horaires = ?", [
//       detail,
//       detail.id_horaires,
//     ])
//     .then((res) => res)
//     .catch((err) => console.log(err));
// };

// const updateReseaux = async (detail) => {
//   return await db
//     .query("UPDATE reseaux SET ? WHERE id_reseaux = ?", [
//       detail,
//       detail.id_reseaux,
//     ])
//     .then((res) => res)
//     .catch((err) => console.log(err));
// };

// const updateContact = async (data) => {
//   try {
//     const details = [...data.details];
//     delete data.details;
//     const products = await db.query(
//       "UPDATE contact SET ? WHERE id_horaires = ? AND id_reseaux = ?",
//       [data, data.id_horaires, data.id_reseaux]
//     );

//     const arr = await Promise.all(
//       details.map(async (detail) => await updateHoraires(details))
//     );
//     const array = await Promise.all(
//       details.map(async (detail) => await updateReseaux(details))
//     );
//     console.log(arr);
//     console.log(contact);
//     return contact;
//   } catch (err) {
//     console.log(err);
//   }
// };

module.exports = {
  getContact,
  //updateContact,
};

// fusion des données de contact dans le footer
