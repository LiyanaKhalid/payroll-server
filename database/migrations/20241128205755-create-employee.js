"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Employees", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      employee_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      epf_uan: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_account_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ifsc: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      esi_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      aadhaar_number: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      date_of_birth: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mobile_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      daily_wage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bonus: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      allowance: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contribution: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      client_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Clients", key: "id" },
        onDelete: "RESTRICT",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Employees");
  },
};
