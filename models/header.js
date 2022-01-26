const connection = require("../db-config");

const db = connection.promise();

const getHeader = () => {
  return "header";
};

module.exports = {
  getHeader,
};
