const express = require("express");
const router = express.Router();
const { isAuthenticated, isAdmin } = require("../middlewares/auth");
const adminController = require("../controllers/adminController");

router.get("/", isAuthenticated, isAdmin, adminController.dashboard);

module.exports = router;
