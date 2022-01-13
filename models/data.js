const connection = require('../db-config');

const db = connection.promise();

const findMany = ({ filter: { title, description } }) => {
  let sqlQuery = 'SELECT * FROM beers';
  const sqlValue = [];

  if (title && description) {
    sqlQuery += ' WHERE name LIKE ? OR description LIKE ? AND > ?';
    sqlValue.push(`%${title}%`, `%${title}%`, description);
  } else if (title) {
    sqlQuery += ' WHERE name LIKE ? OR description LIKE ?';
    sqlValue.push(`%${title}%`, `%${title}%`);
  } else if (description) {
    sqlQuery += ' WHERE > ?';
    sqlValue.push(description);
  }
  return db.query(sqlQuery, sqlValue).then((result) => result[0]);
};

const findOne = (id) => db
  .query('SELECT * FROM WHERE id = ?', [id])
  .then((result) => result[0][0]);

const createOne = (body) => ({ msg: 'created' });

const updateOne = (body) => ({ msg: 'updated' });

module.exports = {
  findMany,
  findOne,
  createOne,
  updateOne,
};
