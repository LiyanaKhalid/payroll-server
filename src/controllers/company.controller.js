const { Company } = require("../models");

const getAll = async (req, res) => {
  try {
    const companies = await Company.findAll({ where: { user_id: req.userId } });
    res.json({ companies });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const company = await Company.findByPk(id);
    res.json({ company });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAll, getOne };
