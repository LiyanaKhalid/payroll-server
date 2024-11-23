const { Client } = require("../models");

const getAll = async (req, res) => {
  try {
    const clients = await Client.findAll({
      where: { company_id: req.query.companyId },
    });
    res.json({ clients });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findByPk(id);
    res.json({ client });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createOne = async (req, res) => {
  try {
    const client = await Client.create({ ...req.body });
    res.status(201).json({ client });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.update({ ...req.body }, { where: { id } });
    res.status(201).json({ client });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAll, getOne, createOne, updateOne };
