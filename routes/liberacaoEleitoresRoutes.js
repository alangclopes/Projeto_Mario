// routes/liberacaoEleitoresRoutes.js
const express = require("express");
const router = express.Router();
const liberacaoEleitoresController = require("../controllers/liberacaoEleitoresController");

router.get("/", liberacaoEleitoresController.index);
router.post("/create", liberacaoEleitoresController.create);

module.exports = router;
