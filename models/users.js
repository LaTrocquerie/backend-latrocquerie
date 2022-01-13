const connection = require('../db-config');

const db = connection.promise();

const findOneByEmail = (email) => db
  .query('SELECT * FROM users WHERE email = ?', [email])
  .then((result) => result[0][0]);

module.exports = {
  findOneByEmail,
};
