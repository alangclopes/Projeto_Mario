const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");

router.get("/", candidatoController.listar);
router.get("/criar", candidatoController.criar);
router.post("/criar", candidatoController.salvar);

module.exports = router;
