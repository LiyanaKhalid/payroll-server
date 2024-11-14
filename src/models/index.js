const User = require("./user.model");
const Company = require("./company.model");

// Model associations
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

module.exports = { User, Company };
