const express = require("express");
const router = express.Router();
const chapaController = require("../controllers/chapaController");

router.get("/create", chapaController.renderCreateChapa);
router.post("/create", chapaController.createChapa);

module.exports = router;
