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
    type: DataTypes.UUID,
    references: { model: Company, key: "id" },
  },
});

module.exports = Client;
