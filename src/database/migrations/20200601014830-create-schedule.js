"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("schedules", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      dog: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      value: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("schedule");
  },
};
