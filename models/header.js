const connection = require('../db-config');

const db = connection.promise();

const getHeader = () => 'header';

module.exports = {
  getHeader,
};
