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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//Import Controller
const RegisController = require("./controllers/Register");
const LoginController = require("./controllers/Login");
const AddTiketController = require("./controllers/AddTiket");
const TiketController = require("./controllers/Tiket");
const OrderController = require("./controllers/Order");
// const ChallangeController = require("./controllers/Challange");
// const TypeTrainController = require("./controllers/Type_Train");

//Set Router
app.group("/api/v2", router => {
  router.post("/register", RegisController.Regis); //3
  router.post("/login", LoginController.index); //2
  router.get("/user", authenticated, LoginController.cekUser);

  //Tiket
  router.post("/addtiket", authenticated, AddTiketController.AddTiket); //10
  router.get("/tiket", authenticated, TiketController.Tiket); //5
  router.get("/tikett", TiketController.indexTiket);

  //challange
  // router.get("/challange", authenticated, ChallangeController.challange);

  //Tiket
  // router.get("/alltiket", TypeTrainController.AllTiket);

  //Order
  router.get("/order/:id", authenticated, OrderController.showOrder); //8
  router.post("/order", authenticated, OrderController.InsertOrder); // 6
  router.patch("/order/:id", authenticated, OrderController.EditOrder); //9
  router.get("/order", OrderController.index);
});

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(port));
