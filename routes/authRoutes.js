const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController'); // Verifique o caminho correto aqui

// Rota para exibir o formulário de login do administrador
router.get('/admin', authController.showAdminLoginForm);

// Rota para lidar com o login do administrador
router.post('/admin', authController.adminLogin);

module.exports = router;

router.get('/eleitor', authController.showEleitorLoginForm);
router.post('/eleitor', authController.eleitorLogin);
router.get('/votacao', authMiddleware.isEleitorAuthenticated, (req, res) => {
  res.render("votacao/index");
});

module.exports = router;
