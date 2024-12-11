const User = require("./user.model");
const Company = require("./company.model");
const Client = require("./client.model");
const Employee = require("./employee.model");
const Attendance = require("./attendance.model");

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

Client.hasMany(Employee, {
  foreignKey: "client_id",
  as: "employees",
  onDelete: "RESTRICT",
});
Employee.belongsTo(Client, {
  foreignKey: "client_id",
  as: "client",
  onDelete: "RESTRICT",
});

Client.hasMany(Attendance, {
  foreignKey: "client_id",
  as: "attendances",
  onDelete: "RESTRICT",
});
Attendance.belongsTo(Client, {
  foreignKey: "client_id",
  as: "client",
  onDelete: "RESTRICT",
});

Employee.hasMany(Attendance, {
  foreignKey: "employee_id",
  as: "attendances",
  onDelete: "RESTRICT",
});
Attendance.belongsTo(Employee, {
  foreignKey: "employee_id",
  as: "employee",
  onDelete: "RESTRICT",
});

// ------ END: Model associations ------

module.exports = { User, Company, Client, Employee, Attendance };
