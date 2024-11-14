const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const controller = require("../controllers/company.controller");

const router = express.Router();

router.use(authenticateToken);

router.get("/", controller.getAll);

module.exports = router;
