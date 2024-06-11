const express = require("express");
const router = express.Router();
const eleitorController = require("../controllers/eleitorController");

router.get("/", eleitorController.findAll);
router.get("/:id", eleitorController.findById);
router.post("/", eleitorController.create);
router.put("/:id", eleitorController.update);
router.delete("/:id", eleitorController.delete);

module.exports = router;
