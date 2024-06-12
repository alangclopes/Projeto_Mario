const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rota para exibir o formulário de login de admin
router.get("/admin", authController.showAdminLoginForm);

// Rota para lidar com o envio do formulário de login de admin
router.post("/admin", authController.adminLogin);

module.exports = router;
