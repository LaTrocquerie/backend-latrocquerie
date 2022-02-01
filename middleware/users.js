const bcrypt = require('bcrypt');
const Users = require('../models/users');

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

module.exports = {
  checkPassword
}