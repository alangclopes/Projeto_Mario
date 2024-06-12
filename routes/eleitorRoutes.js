const express = require("express");
const router = express.Router();
const eleitorController = require("../controllers/eleitorController");

router.get("/", eleitorController.getAllEleitores);
router.get("/cadastrar", eleitorController.getEleitorForm);
router.post("/cadastrar", eleitorController.createEleitor);

module.exports = router;
