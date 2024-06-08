const express = require("express");
const router = express.Router();
const relatorioInicializacaoController = require("../controllers/relatorioInicializacaoController");

router.get("/", relatorioInicializacaoController.listar);

module.exports = router;
