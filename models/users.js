const connection = require("../db-config");
const db = connection.promise();

const findOneByEmail = email => {
  return db.query('SELECT email, hashpassword FROM users WHERE email = ?', email)
    .then(user => user[0][0])
}

module.exports = {
  findOneByEmail
}