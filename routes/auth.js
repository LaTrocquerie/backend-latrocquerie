const authRouter = require("express").Router();
const { getPassword } = require("../middleware/user");
const { calculToken } = require("../helpers/auth");

authRouter.post("/login", getPassword, (req, res) => {
  bcrypt
    .compare(req.body.password, req.body.hashedpassword)
    .then((result) => {
      if (result) {
        delete req.body.hashedpassword;
        delete req.body.id;
        res
          .status(201)
          .cookie(
            "user_token",
            calculToken(req.body.email, req.body.uuid_users),
            {
              httpOnly: true,
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            }
          )
          .json(req.body);
      } else {
        res.status(404).send("Invalid credentials");
      }
    })
    .catch((err) => {
      res.status(500).send("Error retrieving data");
    });
});

module.exports = authRouter;