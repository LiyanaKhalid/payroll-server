const { DataTypes } = require("sequelize");
const database = require("../configs/connection");
const Company = require("./company.model");

const Client = database.define("Client", {
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
    type: DataTypes.TEXT,
    allowNull: true,
  },
  gst: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contract_value: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contract_category: {
    type: DataTypes.ENUM("cleaning", "manpower"),
    allowNull: true,
  },
  contract_duration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  days: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  epbg_date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  epbg_amount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  epbg_expiry_date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  company_id: {
    type: DataTypes.UUID,
    references: { model: Company, key: "id" },
  },
});

module.exports = Client;
