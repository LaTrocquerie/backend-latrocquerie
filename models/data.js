const connection = require('../db-config');

const db = connection.promise();

/**
 * Methode pour retrouver un film via son id
 * @param {*} id (req.params)
 * @returns
 */
const findOne = (id_pages) => db
  .query('SELECT * FROM pages WHERE id_pages = ?', [id_pages])
  .then((result) => {
    console.log(result[0]);
    console.log(id_pages);
    return result[0][0];
  });

module.exports = {
  findOne,
};
