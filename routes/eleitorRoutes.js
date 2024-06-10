const express = require("express");
const router = express.Router();
const eleitorController = require("../controllers/eleitorController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.get("/", isAuthenticated, eleitorController.getAll);
router.post("/criar", isAdmin, eleitorController.create);

module.exports = router;
