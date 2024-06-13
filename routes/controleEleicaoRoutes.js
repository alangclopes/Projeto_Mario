const express = require("express");
const router = express.Router();
const controleEleicaoController = require("../controllers/controleEleicaoController");

// Rota para exibir a página de controle da eleição
router.get("/", controleEleicaoController.showControleEleicao);

// Rota para iniciar a votação
router.post("/iniciar", controleEleicaoController.iniciarVotacao);

// Rota para encerrar a votação
router.post("/encerrar", controleEleicaoController.encerrarVotacao);

module.exports = router;
