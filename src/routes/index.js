const express = require("express");
const authRoutes = require("./auth.routes");
const companyRoutes = require("./company.routes");
const clientRoutes = require("./client.routes");
const employeeRoutes = require("./employee.routes");

const router = express.Router();
router.use("/auth", authRoutes);
router.use("/companies", companyRoutes);
router.use("/clients", clientRoutes);
router.use("/employees", employeeRoutes);

module.exports = router;
