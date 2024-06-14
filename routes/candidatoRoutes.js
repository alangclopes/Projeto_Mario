const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");

router.post("/create", candidatoController.createCandidato);
router.get("/create", candidatoController.getAllCandidatos);
router.get("/create", candidatoController.getCandidatoForm);

module.exports = router;
