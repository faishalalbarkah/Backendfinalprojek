"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tikets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_train: {
        type: Sequelize.STRING
      },
      type_train_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "type_trains",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      date_start: {
        type: Sequelize.DATE
      },
      start_station: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.TIME
      },
      destination_station: {
        type: Sequelize.STRING
      },
      arrival_time: {
        type: Sequelize.TIME
      },
      price: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tikets");
  }
};
