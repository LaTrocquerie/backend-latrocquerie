const router = require('express').Router();
const {
  findOne,
} = require('../models/data');

router.get('/:page', (req, res) => {
  findOne(req.params.page)
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

module.exports = router;
