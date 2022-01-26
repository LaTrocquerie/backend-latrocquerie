const routerFooter = require("express").Router();
const { getContact } = require("../models/footer");

// Route GET

routerFooter.get("/", async (req, res) => {
  const result = await getContact();
  res.status(200).json(result);
});

// Route POST

routerFooter.post("/", async (req, res) => {
  const result = await createFooter(req.body);
  res.status(201).json(result);
});

module.exports = routerFooter;



