const Joi = require("joi");

const createSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().min(8).required(),
  gst: Joi.string().required(),
  tan: Joi.string().required(),
  contact_number: Joi.string().required(),
  contract_value: Joi.string().required(),
  contract_category: Joi.string().valid("cleaning", "manpower").required(),
  contract_duration: Joi.string().required(),
  days: Joi.string().required(),
  epbg_amount: Joi.string().required(),
  epbg_expiry_date: Joi.string().required(),
  epbg_date: Joi.string().required(),
  // Foreign key reference to company
  company_id: Joi.string().guid({ version: "uuidv4" }).required(),
});

module.exports = { createSchema };
