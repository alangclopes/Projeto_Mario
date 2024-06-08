const express = require("express");
const router = express.Router();
const chapaController = require("../controllers/chapaController");

router.get("/", chapaController.listar);
router.get("/criar", chapaController.criar);
router.post("/criar", chapaController.salvar);

module.exports = router;
