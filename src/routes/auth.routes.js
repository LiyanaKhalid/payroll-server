const express = require("express");
const controller = require("../controllers/auth.controller");

const router = express.Router();

router.post("/generate", controller.generateToken);
router.post("/refresh", controller.refreshToken);

module.exports = router;
