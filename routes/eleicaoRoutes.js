const express = require("express");
const router = express.Router();
const eleicaoController = require("../controllers/eleicaoController");

router.get("/", eleicaoController.listar);
router.get("/criar", eleicaoController.criar);
router.post("/criar", eleicaoController.salvar);

module.exports = router;
