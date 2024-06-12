const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');

// Rota para o dashboard, protegida pelo middleware de autenticação de administrador
router.get('/', authMiddleware.isAdminAuthenticated, authController.dashboard);

module.exports = router;
