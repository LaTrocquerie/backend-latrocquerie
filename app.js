const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const multer = require('multer');
const connection = require('./db-config');

const { setupRoutes } = require('./routes');

const PORT = process.env.PORT || 8000;

// paramétrage d'une nouvelle connexion (getConnection)
connection.getConnection((err, conn) => {
  if (err) console.log('Erreur de connexion à la DB', err);
  else console.log(`Connexion à la DB ok, id${conn.threadId}`);
});

// middleware
app.use(express.json());
app.use(cors());

setupRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../frontend_latrocquerie/public/assets/images');
  },
  filename: (req, file, callback) => {
    const provisoireFileName = file.originalname.split('.');
    const date = Date.now();
    req.newName = `${provisoireFileName[0]}_${date}.${provisoireFileName[1]}`;
    callback(null, req.newName);
  },
});

const upload = multer({ storage });

app.get('/upload', (req, res) => {
  res.json(req.body);
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.json(`./assets/images/${req.newName}`);
});
