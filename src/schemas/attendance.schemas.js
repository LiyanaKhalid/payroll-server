const Joi = require("joi");

const createSchema = Joi.object({
  date: Joi.number().required(),
  presence: Joi.number().required(),
  // Foreign key references to client and employee
  client_id: Joi.string().guid({ version: "uuidv4" }).required(),
  employee_id: Joi.string().guid({ version: "uuidv4" }).required(),
});

module.exports = { createSchema };
