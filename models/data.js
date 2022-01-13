const connection = require("../db-config");

const db = connection.promise();

const findMany = ({ filter: { title, description } }) => {
  let sqlQuery = "SELECT * FROM beers";
  sqlValue = [];

  if (title && description) {
    query += " WHERE name LIKE ? OR description LIKE ? AND > ?";
    sqlValue.push(`%${title}%`, `%${title}%`, description);
  } else if (title) {
    sqlQuery += " WHERE name LIKE ? OR description LIKE ?";
    sqlValue.push(`%${title}%`, `%${title}%`);
  } else if (description) {
    sqlQuery += "WHERE > ?";
    sqlValue.push(description);
  }

  console.log(sqlQuery);
  console.log(sqlValue);

  return db.query(sqlQuery, sqlValue).then((result) => result[0]);
};

const findOne = (id) => {
  return db
    .query("SELECT * FROM WHERE id = ?", [id])
    .then((result) => result[0][0]);
};

const createOne = (body) => {
  return { msg: "created" };
};

const updateOne = (body) => {
  return { msg: "updated" };
};

module.exports = {
  findMany,
  findOne,
  createOne,
  updateOne,
};