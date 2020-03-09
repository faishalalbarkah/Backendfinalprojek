// const jwt = require("jsonwebtoken");
const model = require("../models");
// const Type_Train = model.type_train;
const Tiket = model.tiket;

// -POST /ticket
exports.AddTiket = async (req, res) => {
  try {
    const tikettrain = {
      nama_train: req.body.nama_train,
      type_train_id: req.body.type_train_id.id,
      date_start: req.body.date_start,
      start_station: req.body.start_station,
      start_time: req.body.start_time,
      destination_station: req.body.destination_station,
      arrival_time: req.body.arrival_time,
      price: req.body.price,
      qty: req.body.qty
    };
    const Tiketed = await Tiket.create(tikettrain);
    if (Tiketed) {
      res.status(200).send({
        status: 200,
        message: "success"
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "no data"
      });
    }
  } catch (error) {
    console.log(error);
  }
};
