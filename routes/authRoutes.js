const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/admin', authController.showAdminLoginForm);
router.post('/admin', authController.adminLogin);
router.get('/dashboard', authMiddleware.isAdminAuthenticated, authController.dashboard);

router.get('/eleitor', authController.showEleitorLoginForm);
router.post('/eleitor', authController.eleitorLogin);
router.get('/votacao', authMiddleware.isEleitorAuthenticated, (req, res) => {
  res.render("votacao/index");
});

module.exports = router;
