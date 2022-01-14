const router = require('express').Router();
const {
  findOne,
} = require('../models/data');

router.get('/:page', async (req, res) => {
  const result = await findOne(req.params.page);
  res.status(200).json(result);
});

module.exports = router;
