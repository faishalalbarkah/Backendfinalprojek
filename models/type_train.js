"use strict";
module.exports = (sequelize, DataTypes) => {
  const type_train = sequelize.define(
    "type_train",
    {
      name_type_train: DataTypes.STRING
    },
    {}
  );
  type_train.associate = function(models) {
    // associations can be defined here
  };
  return type_train;
};
