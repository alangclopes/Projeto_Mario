const express = require("express");
const router = express.Router();
const votacaoController = require("../controllers/votacaoController");

router.post("/votar", votacaoController.votar);

module.exports = router;
