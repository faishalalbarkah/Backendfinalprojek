const models = require("../models");
const Order = models.order;
const User = models.user;
const Tiket = models.tiket;
const Type_Train = models.type_train;

//Get All Tiket (5)
exports.Tiket = async (req, res) => {
  try {
    const id = req.user.userId;

    const iamtiket = await Order.findAll({
      attributes: [
        "id",
        "qty",
        "total_price",
        "status",
        "attachment",
        "createdAt",
        "updatedAt"
      ],
      include: [
        {
          model: User,
          attributes: [
            "id",
            "nama",
            "username",
            "password",
            "email",
            "gender",
            "phone",
            "address"
          ]
        },
        {
          model: Tiket,
          attributes: [
            "id",
            "nama_train",
            "date_start",
            "start_station",
            "start_time",
            "destination_station",
            "arrival_time",
            "price"
          ],
          include: [
            {
              model: Type_Train,
              attributes: ["id", "name_type_train"]
            }
          ]
        }
      ]
    });

    res.status(200).send({
      status: 200,
      message: "success",
      iamtiket
    });
    // }
  } catch (error) {
    res.send(error);
  }
};

//Gett Home
exports.indexTiket = async (req, res) => {
  try {
    const ticket = await Tiket.findAll({
      attributes: [
        "id",
        "nama_train",
        "date_start",
        "start_station",
        "start_time",
        "destination_station",
        "arrival_time",
        "price",
        "qty"
      ],
      include: { model: Type_Train, attributes: ["name_type_train"] }
    });
    if (ticket) {
      res.status(200).send({
        status: 200,
        message: "success",
        ticket
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
