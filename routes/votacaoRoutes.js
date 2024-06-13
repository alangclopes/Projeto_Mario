const express = require("express");
const router = express.Router();
const votacaoController = require("../controllers/votacaoController");

router.get("/", votacaoController.findAll);
router.get("/:id", votacaoController.findById);
router.post("/", votacaoController.create);
router.put("/:id", votacaoController.update);
router.delete("/:id", votacaoController.delete);

module.exports = router;
