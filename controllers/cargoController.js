const Cargo = require("../models/cargo");

exports.showForm = (req, res) => {
  res.render("cargo/index");
};

exports.addCargo = async (req, res) => {
  const { cargo, eleicao_id } = req.body;
  
  if (!cargo || !eleicao_id) {
    return res.status(400).send("Por favor, preencha todos os campos.");
  }

  try {
    const newCargo = {
      nome: cargo,
      eleicao_id: parseInt(eleicao_id),
    };

    const cargoId = await Cargo.add(newCargo);
    res.redirect("/cargos"); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao cadastrar o cargo.");
  }
};

exports.listCargos = async (req, res) => {
  try {
    const cargos = await Cargo.getAll();
    res.render("cargo/list", { cargos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao listar os cargos.");
  }
};
