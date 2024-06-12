const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para o dashboard
router.get('/dashboard', authMiddleware.isAdminAuthenticated, authController.dashboard);

// Rota para exibir o formulário de login do admin
router.get('/admin', authController.showAdminLoginForm);

// Rota para o login do admin
router.post('/admin', authController.adminLogin);

module.exports = router;
