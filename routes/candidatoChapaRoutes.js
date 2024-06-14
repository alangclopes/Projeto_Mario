const express = require("express");
const router = express.Router();
const candidatoChapaController = require("../controllers/candidatoChapaController");

router.get("/cadastro", candidatoChapaController.showForm);
router.post("/formulario", candidatoChapaController.addCandidatoChapa);
router.get("/opcoes", candidatoChapaController.getOpcoes);

module.exports = router;
