const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");

router.get("/", candidatoController.listarCandidatos);
router.post("/criar", candidatoController.criarCandidato);

module.exports = router;
