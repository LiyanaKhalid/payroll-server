const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { validatePayload } = require("../middlewares/validation.middleware");
const controller = require("../controllers/employee.controller");
const schemas = require("../schemas/employee.schemas");

const router = express.Router();

router.use(authenticateToken);

router.get("/:id", controller.getOne);
router.post("/", validatePayload(schemas.createSchema), controller.createOne);
router.put("/:id", validatePayload(schemas.createSchema), controller.updateOne);

module.exports = router;
