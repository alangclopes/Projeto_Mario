const express = require("express");
const router = express.Router();
const relatorioFinalizacaoController = require("../controllers/relatorioFinalizacaoController");

router.get("/", relatorioFinalizacaoController.listar);

module.exports = router;
