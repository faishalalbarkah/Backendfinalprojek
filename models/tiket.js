"use strict";
module.exports = (sequelize, DataTypes) => {
  const tiket = sequelize.define(
    "tiket",
    {
      nama_train: DataTypes.STRING,
      type_train_id: DataTypes.INTEGER,
      date_start: DataTypes.DATE,
      start_station: DataTypes.STRING,
      start_time: DataTypes.TIME,
      destination_station: DataTypes.STRING,
      arrival_time: DataTypes.TIME,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );
  tiket.associate = function(models) {
    // associations can be defined here
    tiket.belongsTo(models.type_train, {
      foreignKey: "type_train_id"
    });
  };
  return tiket;
};
