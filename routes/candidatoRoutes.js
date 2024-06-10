const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/candidatoController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.get("/", isAuthenticated, candidatoController.getAll);
router.post("/criar", isAdmin, candidatoController.create);

module.exports = router;
