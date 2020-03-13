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
      const token = jwt.sign({ userId: login.id }, "my-secret-key");
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

exports.cekUser = (req, res) => {
  console.log(req.user.id);
  User.findOne({
    where: { id: req.user.userId }
  }).then(data => {
    if (data) res.send({ data });
    else res.status(401).send({ msg: "erro" });
  });
};
