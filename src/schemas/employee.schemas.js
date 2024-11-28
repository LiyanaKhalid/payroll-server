const Joi = require("joi");

const createSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().min(8).required(),
  employee_id: Joi.string().required(),
  epf_uan: Joi.string().required(),
  bank_account_number: Joi.string().required(),
  ifsc: Joi.string().required(),
  bank_name: Joi.string().required(),
  esi_number: Joi.string().required(),
  aadhaar_number: Joi.number().required(),
  date_of_birth: Joi.string().required(),
  mobile_number: Joi.string().required(),
  daily_wage: Joi.string().required(),
  bonus: Joi.string().required(),
  allowance: Joi.string().required(),
  contribution: Joi.string().required(),
  // Foreign key reference to client
  client_id: Joi.string().guid({ version: "uuidv4" }).required(),
});

module.exports = createSchema;
