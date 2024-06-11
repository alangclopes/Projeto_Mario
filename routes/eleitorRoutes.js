const express = require("express");
const router = express.Router();
const eleitorController = require("../controllers/eleitorController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

// Rota para listar os eleitores (se existir)
router.get("/", isAdmin, eleitorController.listEleitores);

// Rota para exibir o formulário de cadastro de eleitor
router.get("/cadastrar", isAdmin, eleitorController.showRegisterForm);

// Rota para processar o cadastro de eleitor
router.post("/cadastrar", isAdmin, eleitorController.registerEleitor);

module.exports = router;
