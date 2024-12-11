const { Op } = require("sequelize");
const { Attendance, Client, Employee } = require("../models");

const getAll = async (req, res) => {
  const { clientId, employeeId, start, end } = req.query;
  if (!clientId) {
    return res.status(400).json({ error: "clientId is required" });
  }

  // Conditions --- clientId (required), employeeId, start, end
  const conditions = { client_id: clientId };
  if (employeeId) conditions.employee_id = employeeId;
  if (start && end) conditions.date = { [Op.between]: [start, end] };
  else if (start) conditions.date = { [Op.gte]: start };
  else if (end) conditions.date = { [Op.lte]: end };

  try {
    if (employeeId) {
      const attendances = await Attendance.findAll({
        where: conditions,
        include: [
          {
            model: Client,
            as: "client",
            attributes: ["id", "name"],
          },
          {
            model: Employee,
            as: "employee",
            attributes: ["id", "name", "employee_id"],
          },
        ],
        order: [["date", "ASC"]],
      });
      return res.json({ attendances });
    } else {
      const attendances = await Employee.findAll({
        where: { client_id: clientId },
        attributes: ["id", "name", "employee_id"],
        include: [
          {
            model: Attendance,
            as: "attendances",
            where: conditions,
            required: false, // This makes the join a LEFT JOIN
          },
        ],
      });
      return res.json({ attendances });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createOne = async (req, res) => {
  try {
    const attendance = await Attendance.create({ ...req.body });
    res.status(201).json({ attendance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const attendance = await Attendance.update(
      { ...req.body },
      { where: { id } }
    );
    res.status(200).json({ attendance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAll, createOne, updateOne };
