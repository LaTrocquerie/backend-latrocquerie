const router = require("express").Router();
const { findOne } = require("../models/data");

// Route GET

router.get("/:page", async (req, res) => {
  console.log(req.params.page);
  const result = await findOne(req.params.page);
  res.status(200).json(result);
});

// Route POST

router.post("/:page", async (req, res) => {
  const result = await createOne(req.body);
  res.status(201).json(result);
});

module.exports = router;
