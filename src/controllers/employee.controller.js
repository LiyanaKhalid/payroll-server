const { Employee } = require("../models");

const getAll = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      where: { client_id: req.query.clientId },
      attributes: ["id", "name", "employee_id", "mobile_number"],
    });
    res.json({ employees });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findByPk(id);
    res.json({ employee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createOne = async (req, res) => {
  try {
    console.log("Shamil", req.body);
    const employee = await Employee.create({ ...req.body });
    res.status(201).json({ employee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.update({ ...req.body }, { where: { id } });
    res.status(200).json({ employee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAll, getOne, createOne, updateOne };
