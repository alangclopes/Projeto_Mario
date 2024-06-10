const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.get("/", isAuthenticated, isAdmin, candidatoController.getAll);
router.post("/criar", isAuthenticated, isAdmin, candidatoController.create);

module.exports = router;
