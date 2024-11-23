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

module.exports = { getAll, getOne };
