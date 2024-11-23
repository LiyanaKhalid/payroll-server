"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Clients", {
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
        type: Sequelize.TEXT,
        allowNull: true,
      },
      gst: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tan: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contact_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contract_value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contract_category: {
        type: Sequelize.ENUM("cleaning", "manpower"),
        allowNull: true,
      },
      contract_duration: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      days: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      epbg_date: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      epbg_amount: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      epbg_expiry_date: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      company_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Companies", key: "id" },
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Clients");
  },
};
