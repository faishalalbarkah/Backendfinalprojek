"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      id_tiket: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
      status: DataTypes.STRING,
      attachment: DataTypes.STRING
    },
    {}
  );
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.tiket, {
      foreignKey: "id_tiket"
    });
    order.belongsTo(models.user, {
      foreignKey: "id_user"
    });
  };
  return order;
};
