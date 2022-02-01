const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const connection = require("./db-config");

const { setupRoutes } = require("./routes/index.js");

const PORT = process.env.PORT || 8000;

// paramétrage d'une nouvelle connexion (getConnection)
connection.getConnection((err, conn) => {
  if (err) console.log("Erreur de connexion à la DB", err);
  else console.log(`Connexion à la DB ok, id${conn.threadId}`);
});

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("app qui tourne");
});
setupRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});