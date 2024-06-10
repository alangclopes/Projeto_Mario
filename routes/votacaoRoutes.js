const express = require("express");
const router = express.Router();
const votacaoController = require("../controllers/votacaoController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.get("/", isAuthenticated, votacaoController.index);
router.post("/votar", isAuthenticated, votacaoController.votar);

module.exports = router;
