const jwt = require("jsonwebtoken");
const model = require("../models");
const User = model.user;

exports.index = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;

  User.findOne({
    where: { username: username }
  }).then(login => {
    if (login) {
      const token = jwt.sign({ userId: login.username }, "my-secret-key");
      res.send({
        message: "Success",
        username: login.username,
        role: login.role,
        token
      });
    } else {
      res.send({ error: true, message: "Wrong Email and Password" });
    }
  });
};
