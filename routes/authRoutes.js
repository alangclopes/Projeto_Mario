const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rota para renderizar o formulário de login do administrador
router.get("/login/admin", authController.renderAdminLogin);

// Rota para processar o login do administrador
router.post("/login/admin", authController.loginAdmin);

module.exports = router;
