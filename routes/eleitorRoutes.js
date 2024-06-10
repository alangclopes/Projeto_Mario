const express = require("express");
const router = express.Router();
const eleitorController = require("../controllers/eleitorController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.get("/", isAuthenticated, isAdmin, eleitorController.getAll);
router.post("/criar", isAuthenticated, isAdmin, eleitorController.create);

module.exports = router;
