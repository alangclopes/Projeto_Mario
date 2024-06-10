const express = require("express");
const router = express.Router();
const votacaoController = require("../controllers/votacaoController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.get("/", isAuthenticated, votacaoController.getAll);
router.post("/criar", isAdmin, votacaoController.create);

module.exports = router;
