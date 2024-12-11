"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .removeIndex("Attendances", "unique_attendance_combination")
      .catch(() => {});

    await queryInterface.createTable("Attendances", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      date: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      presence: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      employee_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Employees", key: "id" },
        onDelete: "RESTRICT",
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

    await queryInterface.addIndex("Attendances", {
      type: "unique",
      fields: ["employee_id", "client_id", "date"],
      name: "unique_attendance_combination",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex(
      "Attendances",
      "unique_attendance_combination"
    );
    await queryInterface.dropTable("Attendances");
  },
};
