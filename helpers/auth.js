const jwt = require('jsonwebtoken');
require('dotenv').config();

const calculToken = (email, uuid) => jwt.sign({ email, uuid }, process.env.PRIVATE_KEY);

module.exports = {
  calculToken,
};
