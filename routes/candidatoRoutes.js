const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");

router.get("/", candidatoController.findAll);
router.get("/:id", candidatoController.findById);
router.post("/", candidatoController.create);
router.put("/:id", candidatoController.update);
router.delete("/:id", candidatoController.delete);

module.exports = router;
