const express = require("express");
const router = express.Router();
const chapaController = require("../controllers/chapaController");

// Rota para renderizar o formulário de criação de chapas
router.get("/cadastrar", chapaController.renderCreateChapa);

// Rota para criar uma nova chapa
router.post("/cadastrar", chapaController.createChapa);

module.exports = router;
