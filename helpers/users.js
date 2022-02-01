const jwt = require('jsonwebtoken')

const PRIVATE_KEY = "latrocquerieWebTokenWildCodeSchool";

const calculateToken = (userEmail = "", uuidusers) => {
  return jwt.sign({ email: userEmail, uuid: uuidusers }, PRIVATE_KEY);
}

const checkJwtAuth = (token) => {
  return jwt.verify(token, PRIVATE_KEY)
}

module.exports = { calculateToken, checkJwtAuth };