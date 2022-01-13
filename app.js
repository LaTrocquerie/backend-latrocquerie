const express = require('express');
require('dotenv').config();

const app = express();
const connection = require('./db-config');

const { setupRoutes } = require('./routes');

const PORT = process.env.PORT || 8000;

connection.connect((err) => {
  if (err) console.log('Erreur de connexion à la DB', err);
  else console.log(`Connexion à la DB ok, id${connection.threadId}`);
});

// middleware
app.use(express.json());

setupRoutes(app);

app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}`);
});
