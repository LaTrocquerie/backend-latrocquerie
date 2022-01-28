require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createPool(
  "mysql://bde6686755a8a9:94c19bc4@eu-cdbr-west-02.cleardb.net/heroku_f4eff49e44b9067?reconnect=true"
);

// Paramétrage de la connection avec le server (3 dernières lignes) pour éviter qu'il saute

module.exports = connection;
