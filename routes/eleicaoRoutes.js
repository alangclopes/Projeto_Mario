const express = require("express");
const router = express.Router();
const eleicaoController = require("../controllers/eleicaoController");

// Rota para exibir o formulário de cadastro de eleição
router.get("/cadastro", eleicaoController.showForm);

// Rota para processar o cadastro de uma nova eleição
router.post("/formulario", eleicaoController.addEleicao);

module.exports = router;
