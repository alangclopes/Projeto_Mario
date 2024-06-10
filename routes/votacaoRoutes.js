const express = require("express");
const router = express.Router();
const votacaoController = require("../controllers/votacaoController");
const { isAuthenticated, isEleitor } = require("../middlewares/auth");

router.get("/", isAuthenticated, isEleitor, votacaoController.getAll);
router.post("/votar", isAuthenticated, isEleitor, votacaoController.vote);

module.exports = router;
