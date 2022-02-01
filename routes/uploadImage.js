const routerImage = require('express').Router();
const multer = require('multer');

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

routerImage.get('/', (req, res) => {
  res.json(req.body);
});

routerImage.post('/', upload.single('file'), (req, res) => {
  res.json(`./assets/images/${req.newName}`);
});

module.exports = routerImage;