const dataRouter = require("express").Router();
const { findMany, findOne, createOne, updateOne } = require("../models/data");
const { checkAuth } = require("../middleware/user");

dataRouter.get("/", (req, res) => {
  findMany()
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

dataRouter.get("/:id", (req, res) => {
  findOne(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

dataRouter.post("/", checkAuth, (req, res) => {
  res.status(201).json(createOne());
});

dataRouter.put("/", checkAuth, (req, res) => {
  res.status(201).json(updateOne());
});

module.exports = beersRouter;