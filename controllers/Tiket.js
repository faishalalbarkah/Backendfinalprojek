const models = require("../models");
const Order = models.order;
const User = models.user;
const Ticket = models.ticket;
const Train = models.train;

exports.Tiket = async (req, res) => {
  try {
    const id = req.user.userId;
    var date = new Date().toJSON();

    const myticket = await Order.findAll({
      where: {
        id_user: id
      },
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
            "name",
            "user_name",
            "email",
            "password",
            "gender",
            "phone",
            "address"
          ]
        },
        {
          model: Ticket,
          attributes: [
            "id",
            "name_train",
            "date_start",
            "start_station",
            "start_time",
            "destination_station",
            "arival_time",
            "price"
          ]
        }
      ]
    });

    res.status(200).send({
      status: 200,
      message: "success",
      myticket
    });
    // }
  } catch (error) {
    res.send(error);
  }
};
