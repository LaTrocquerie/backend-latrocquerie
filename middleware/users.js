const bcrypt = require('bcrypt');
const Users = require('../models/users');
const { checkJwtAuth } = require('../helpers/users');
const saltRounds = 10;

const hashedPassword = (password) => {
  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      console.log(hash)
    })
    .catch(() => {
      res.status(500).send('Error encoding the password')
    });
}

const checkPassword = (req, res, next) => {
  Users.findOneByEmail(req.body.email)
    .then(user => {
      bcrypt.compare(req.body.password.toString(), user.hashpassword)
        .then(result => {
          if (result) {
            req.body = user;
            delete req.body.hashpassword;
            next()
          } else {
            res.status(404).json({ msg: 'Invalid Credentials from result' })
          }
        })
    })
    .catch(err => res.status(404).json({ msg: 'Invalid Credentials from request' }))
}

/**
 * vérification cookie + role
 */
const checkAuth = (req, res, next) => {
  if (req.headers.token) {//A changer en headers.user_agent
    const auth = checkJwtAuth(req.headers.token);//A changer en headers.user_agent
    if (auth) {
      Users.findOneByEmail(auth.email)
        .then(user => {
          if (user.email === auth.email) next();
          else res.status(401).json({ msg: 'Unauthorized Path' })
        })
        .catch(err => res.status(500).json({ msg: 'Error retrieving data' }))
    } else {
      res.status(401).json({ msg: 'Unauthorized Path' })
    }
  } else {
    res.status(401).json({ msg: 'Unauthorized Path' })
  }
}

module.exports = {
  checkPassword,
  checkAuth,
}