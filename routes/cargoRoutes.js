const express = require("express");
const router = express.Router();
const cargoController = require("../controllers/cargoController");

router.get("/", cargoController.listar);
router.get("/criar", cargoController.criar);
router.post("/criar", cargoController.salvar);

module.exports = router;
