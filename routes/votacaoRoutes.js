const express = require("express");
const router = express.Router();
const votacaoController = require("../controllers/votacaoController");

router.get("/", votacaoController.listarVotacoes);
router.post("/criar", votacaoController.criarVotacao);

module.exports = router;
