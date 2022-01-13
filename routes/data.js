const dataRouter = require('express').Router();
const {
  findMany, findOne,
} = require('../models/data');

dataRouter.get('/', (req, res) => {
  findMany()
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

dataRouter.get('/:id', (req, res) => {
  findOne(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

module.exports = dataRouter;
