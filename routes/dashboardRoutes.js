const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController"); // Verifique o caminho correto aqui

// Rota para o dashboard
router.get("/", dashboardController.renderDashboard);

module.exports = router;
