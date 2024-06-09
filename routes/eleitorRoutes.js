const express = require("express");
const router = express.Router();
const eleitorController = require("../controllers/eleitorController");

router.get("/", eleitorController.listarEleitores);
router.post("/criar", eleitorController.criarEleitor);

module.exports = router;
