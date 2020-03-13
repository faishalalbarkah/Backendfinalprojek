const model = require("../models");
const Order = model.order;
const Type_train = model.type_train;
const Tiket = model.tiket;
const User = model.user;

// 6. Payment
exports.InsertOrder = async (req, res) => {
  try {
    const idTrain = req.body.tiket;
    const train = await Tiket.findOne({ where: { id: idTrain } });

    const id = req.user.userId;

    const { qty, attachment } = req.body;

    const subPrice = train.price * qty; //get sub total price
    const remainsQty = train.qty - qty;
    const data = {
      qty: remainsQty
    };
    // console.log(data);
    if (train.qty) {
      // if (train.qty < qty) {
      const updateTicket = await Tiket.update(data, {
        where: { id: idTrain }
      });

      const resultRemains = await Tiket.findOne({ where: { id: idTrain } });

      const result = await Order.create({
        id_tiket: idTrain,
        id_user: id,
        qty: qty,
        total_price: subPrice,
        status: "Pending",
        attachment: attachment
      });

      if (result) {
        const resultOrder = await Order.findOne({
          where: { id: result.id },
          attributes: ["id", "qty", "total_price", "status", "attachment"],
          include: [
            {
              model: User,
              attributes: [
                "nama",
                "username",
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
                "arrival_time"
              ],
              include: { model: Type_train, attributes: ["name_type_train"] }
            }
          ]
        });
        // console.log(resultOrder);

        res.send(resultOrder);
        res.status(200).send({
          status: 200,
          message: "success",
          // resultOrder,
          resultRemains
        });
      }
    } else {
      res.status(404).send({
        status: 404,
        message: "no ticket"
      });
    }
  } catch (error) {}
};

// 8.-GET/order/:id
exports.showOrder = async (req, res) => {
  try {
    const id = req.user.userId;
    const idOrder = req.params.id;

    // console.log(idOrder);
    const admin = await User.findOne({
      where: { id: id }
    });
    // console.log(admin);

    if (admin) {
      const result = await Order.findOne({
        where: { id: idOrder },
        attributes: ["id", "qty", "total_price", "status", "attachment"],
        include: [
          {
            model: User,
            attributes: [
              "id",
              "nama",
              "username",
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
              "arrival_time"
            ],
            include: { model: Type_train, attributes: ["name_type_train"] }
          }
        ]
      });
      res.send(result);
      if (result) {
        res.status(200).send({
          status: 200,
          message: "success",
          resultOrder
        });
      }
    } else {
      const result = await Order.findOne({
        where: { id: idOrder, id_user: req.user.userId },

        attributes: ["id", "qty", "total_price", "status", "attachment"],
        include: [
          {
            model: User,
            attributes: [
              "id",
              "nama",
              "username",
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
              "arrival_time"
            ],
            include: { model: Type_train, attributes: ["name_type_train"] }
          }
        ]
      });
      res.send(result);
      if (result) {
        res.status(200).send({
          status: 200,
          message: "success",
          resultOrder
        });
      }
    }
  } catch (error) {}
};

// 9.-PUT /order/:id
exports.EditOrder = async (req, res) => {
  try {
    const idOrder = req.params.id;
    // ======================================

    const resultUpdate = await Order.update(req.body, {
      where: { id: idOrder }
    });

    res.status(200).send({
      status: 200,
      message: "success"
    });
    // res.send(resultUpdate);
  } catch (error) {}
};

//find all order
exports.index = async (req, res) => {
  try {
    const admin = await User.findAll();
    if (admin) {
      const result = await Order.findAll({
        attributes: ["id", "qty", "total_price", "status", "attachment"],
        include: [
          {
            model: User,
            attributes: [
              "id",
              "nama",
              "username",
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
              "arrival_time"
            ],
            include: { model: Type_train, attributes: ["name_type_train"] }
          }
        ]
      });
      res.send(result);
      if (result) {
        res.status(200).send({
          status: 200,
          message: "success",
          resultOrder
        });
      }
    } else {
      const result = await Order.findAll({
        where: { id_user: id },
        attributes: ["id", "qty", "total_price", "status", "attachment"],
        include: [
          {
            model: User,
            attributes: [
              "id",
              "nama",
              "username",
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
              "arrival_time"
            ],
            include: { model: Type_train, attributes: ["name_type_train"] }
          }
        ]
      });
      res.send(result);
      if (result) {
        res.status(200).send({
          status: 200,
          message: "success",
          resultOrder
        });
      }
    }
  } catch (error) {}
};
