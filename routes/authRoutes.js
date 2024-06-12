const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/admin", authController.renderAdminLogin);
router.post("/admin", authController.adminLogin);
router.get("/eleitor", authController.renderEleitorLogin);
router.post("/eleitor", authController.eleitorLogin);

module.exports = router;
