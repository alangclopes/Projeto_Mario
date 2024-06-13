const express = require('express');
const router = express.Router();
const votacaoController = require('../controllers/votacaoController');

router.get('/getchapas', votacaoController.getChapas);

module.exports = router;
