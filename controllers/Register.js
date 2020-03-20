const jwt = require("jsonwebtoken");
const model = require("../models");
const User = model.user;

exports.Regis = (req, res) => {
  const {
    nama,
    username,
    email,
    password,
    gender,
    phone,
    address,
    role
  } = req.body;
  const Register = {
    nama,
    username,
    email,
    password,
    gender,
    phone,
    address,
    role: "false"
  };
  User.create(Register).then(ResRegis => {
    if (ResRegis) {
      const token = jwt.sign({ userId: ResRegis.id }, "my-secret-key");
      res.status(200).send({
        message: "success",
        token
      });
    } else {
      res.status(201).send({
        status: 201,
        error: true,
        message: "email is already in use",
        data: req.body
      });
    }
  });
};
