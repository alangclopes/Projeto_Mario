const eleitorModel = require("../models/eleitor");

exports.getAll = async (req, res) => {
  const eleitores = await eleitorModel.getAllEleitores();
  res.render("eleitor/index", { eleitores });
};

exports.create = async (req, res) => {
  const { nome, cpf, endereco, senha } = req.body;
  await eleitorModel.createEleitor(nome, cpf, endereco, senha);
  res.redirect("/eleitores");
};
