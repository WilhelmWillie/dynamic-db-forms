"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Values", "fieldId", {
        type: Sequelize.INTEGER,
        references: {
          model: "Fields",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }),
      queryInterface.addColumn("Responses", "fieldId", {
        type: Sequelize.INTEGER,
        references: {
          model: "Fields",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Values", "fieldId"),
      queryInterface.removeColumn("Responses", "fieldId")
    ]);
  }
};
