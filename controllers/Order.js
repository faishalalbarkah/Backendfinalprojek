// const model = require("../models");
// const Order = model.order
// const Type_train = model.type_train;
// const Tiket = model.tiket;
// const User = model.user;

// exports.Order = (req,res) => {
//     const  type_trainid = req.body.type_train.id;
//     const tiketid = req.body.tiket.id;
//     const userid = req.body.user.id;
//     const dataorder = {
//         type_train_id = type_trainid,
//         id_tiket = tiketid,
//         id_user = userid,
//         qty: req.body.qty,
//         total_price: req.body.total_price,
//         status:req.body.status,
//         attachment: req.body.attachment
//     }
//     Order.create(dataorder).then(resDer => {
//         Type_train.findOne({where:{id:type_trainid}}).then(Restyprain => {
//             Tiket.findOne({where:{id:tiketid}}).then(ResTik => {
//                 User.findOne({where:{id:userid}}).then(ResUser => {
//                     const ResAll = {

//                     }
//                 })
//             })
//         })
//     })
// }
