const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { validatePayload } = require("../middlewares/validation.middleware");
const controller = require("../controllers/client.controller");
const schemas = require("../schemas/client.schemas");

const router = express.Router();

router.use(authenticateToken);

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", validatePayload(schemas.createSchema), controller.createOne);

module.exports = router;
