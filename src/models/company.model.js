const { DataTypes } = require("sequelize");
const database = require("../configs/connection");

const Company = database.define("Company", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  logo_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    references: { model: User, key: "id" },
  },
});

module.exports = Company;
