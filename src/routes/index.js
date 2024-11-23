const express = require("express");
const authRoutes = require("./auth.routes");
const companyRoutes = require("./company.routes");
const clientRoutes = require("./client.routes");

const router = express.Router();
router.use("/auth", authRoutes);
router.use("/companies", companyRoutes);
router.use("/clients", clientRoutes);

module.exports = router;
