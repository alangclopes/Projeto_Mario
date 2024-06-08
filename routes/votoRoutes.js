const express = require("express");
const router = express.Router();
const votoController = require("../controllers/votoController");
const auth = require("../middlewares/auth");

router.get("/resultado/:eleicaoId", votoController.resultado);
router.get("/votar", auth, votoController.votarForm);
router.post("/votar", auth, votoController.votar);

module.exports = router;
