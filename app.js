const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const connection = require("./db-config");

const { setupRoutes } = require("./routes");

const PORT = process.env.PORT || 8000;

connection.getConnection((err, conn) => {
  if (err) console.log("Erreur de connexion à la DB", err);
  else console.log(`Connexion à la DB ok, id${conn.threadId}`);
});

// middleware
app.use(express.json());
app.use(cors());

setupRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
