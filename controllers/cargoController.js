const Cargo = require("../models/cargo");

exports.listar = async (req, res) => {
  const cargos = await Cargo.findAll();
  res.render("cargos/listar", { cargos });
};

exports.criar = (req, res) => {
  res.render("cargos/criar");
};

exports.salvar = async (req, res) => {
  const { cargo, eleicaoId } = req.body;
  const novoCargo = new Cargo(cargo, eleicaoId);
  await novoCargo.save();
  res.redirect("/cargos");
};
