const express = require("express");
const router = express.Router();
const cargoController = require("../controllers/cargoController");

// Rota para exibir o formulário de cadastro de cargos
router.get("/cadastro", cargoController.showForm);

// Rota para processar o cadastro de um novo cargo
router.post("/formulario", cargoController.addCargo);

// Rota para listar todos os cargos
router.get("/", cargoController.listCargos);

module.exports = router;
