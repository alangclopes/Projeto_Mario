const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");

router.get("/", candidatoController.getAll);
router.post("/criar", candidatoController.create);

module.exports = router;
