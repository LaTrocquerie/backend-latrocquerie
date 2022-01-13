const jwt = require('jsonwebtoken');

const { findOneByEmail } = require('../models/users');

const getPassword = (req, res, next) => {
  findOneByEmail(req.body.email)
    .then((user) => {
      if (user) {
        req.body = { ...req.body, ...user };
        next();
      } else {
        res.status(404).send('Invalid credentials');
      }
    })
    .catch((err) => {
      res.status(500).send('Error retrieving data');
    });
};

const checkAuth = (req, res, next) => {
  jwt.verify(
    req.cookies.user_token,
    process.env.PRIVATE_KEY,
    (err, decoded) => {
      if (err) {
        res.status(401).send('You do not have correct rights');
      } else {
        next();
      }
    },
  );
};

module.exports = {
  getPassword,
  checkAuth,
};
