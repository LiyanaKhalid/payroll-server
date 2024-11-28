const { DataTypes } = require("sequelize");
const database = require("../configs/connection");
const Client = require("./client.model");

const Employee = database.define("Employee", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employee_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  epf_uan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bank_account_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ifsc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bank_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  esi_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aadhaar_number: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  daily_wage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bonus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  allowance: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contribution: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_id: {
    type: DataTypes.UUID,
    references: { model: Client, key: "id" },
  },
});

module.exports = Employee;
