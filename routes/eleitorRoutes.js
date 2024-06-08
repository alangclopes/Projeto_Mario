const express = require('express');
const router = express.Router();
const eleitorController = require('../controllers/eleitorController');

router.get('/', eleitorController.listar);
router.get('/criar', eleitorController.criar);
router.post('/criar', eleitorController.salvar);
router.get('/login', eleitorController.loginForm);
router.post('/login', eleitorController.login);

module.exports = router;
