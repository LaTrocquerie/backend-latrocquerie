const connection = require('../db-config');

const db = connection.promise();

const findOne = (id) => db
  .query('SELECT * FROM pages WHERE id_pages = ?', [id])
  .then((result) => result[0][0]);

module.exports = {
  findOne,
};
