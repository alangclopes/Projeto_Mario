// routes/candidatoRoutes.js
const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");

router.get("/", candidatoController.index);
router.post("/create", candidatoController.create);

module.exports = router;
