const express = require("express");
const router = express.Router();
const votoController = require("../controllers/votoController");

router.get("/", votoController.listar);
router.post("/votar", votoController.votar);

module.exports = router;
