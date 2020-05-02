// exports.challange = async (req, res) => {
//   try {
//     const admin = await User.findAll();
//     if (admin) {
//       const result = await Order.findAll({
//         attributes: ["id", "qty", "total_price", "status", "attachment"],
//         include: [
//           {
//             model: User,
//             attributes: [
//               "id",
//               "nama",
//               "username",
//               "email",
//               "gender",
//               "phone",
//               "address"
//             ]
//           },
//           {
//             model: Tiket,
//             attributes: [
//               "id",
//               "nama_train",
//               "date_start",
//               "start_station",
//               "start_time",
//               "destination_station",
//               "arrival_time"
//             ],
//             include: { model: Type_train, attributes: ["name_type_train"] }
//           }
//         ]
//       });
//       res.send(result);
//       if (result) {
//         res.status(200).send({
//           status: 200,
//           message: "success",
//           resultOrder
//         });
//       }
//     } else {
//       const result = await Order.findAll({
//         where: { id_user: id },
//         attributes: ["id", "qty", "total_price", "status", "attachment"],
//         include: [
//           {
//             model: User,
//             attributes: [
//               "id",
//               "nama",
//               "username",
//               "email",
//               "gender",
//               "phone",
//               "address"
//             ]
//           },
//           {
//             model: Tiket,
//             attributes: [
//               "id",
//               "nama_train",
//               "date_start",
//               "start_station",
//               "start_time",
//               "destination_station",
//               "arrival_time"
//             ],
//             include: { model: Type_train, attributes: ["name_type_train"] }
//           }
//         ]
//       });
//       res.send(result);
//       if (result) {
//         res.status(200).send({
//           status: 200,
//           message: "success",
//           resultOrder
//         });
//       }
//     }
//   } catch (error) {}
// };
