const { DataTypes } = require("sequelize");
const database = require("../configs/connection");
const Employee = require("./employee.model");
const Client = require("./client.model");

const Attendance = database.define(
  "Attendance",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    presence: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.UUID,
      references: { model: Employee, key: "id" },
      allowNull: false,
    },
    client_id: {
      type: DataTypes.UUID,
      references: { model: Client, key: "id" },
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["employee_id", "client_id", "date"],
        name: "unique_attendance_combination",
      },
    ],
  }
);

module.exports = Attendance;
