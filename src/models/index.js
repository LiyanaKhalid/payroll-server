const User = require("./user.model");
const Company = require("./company.model");
const Client = require("./client.model");

// ------ START: Model associations ------

User.hasMany(Company, {
  foreignKey: "user_id",
  as: "companies",
  onDelete: "RESTRICT",
});
Company.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
  onDelete: "RESTRICT",
});

Company.hasMany(Client, {
  foreignKey: "company_id",
  as: "clients",
  onDelete: "RESTRICT",
});
Client.belongsTo(Company, {
  foreignKey: "company_id",
  as: "company",
  onDelete: "RESTRICT",
});

// ------ END: Model associations ------

module.exports = { User, Company, Client };
