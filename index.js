//instantiate express module
const express = require("express");
require("express-group-routes");
const cors = require("cors");

//init bodyParser
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const { authenticated } = require("./middleware");
//use express in app variable
const app = express();
app.use(cors());

const port = 4300;

app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//Import Controller
const RegisController = require("./controllers/Register");
const LoginController = require("./controllers/Login");
const AddTiketController = require("./controllers/AddTiket");
const TiketController = require("./controllers/Tiket");
// const OrderController = require("./controllers/Order");

//Set Router
app.group("/api/v2", router => {
  router.post("/register", RegisController.Regis);
  router.post("/login", LoginController.index);
  router.post("/addtiket", authenticated, AddTiketController.AddTiket);
  router.post("/tiket", authenticated, TiketController.Tiket);
  // router.post("/order", authenticated, OrderController.Order);
});

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(port));
