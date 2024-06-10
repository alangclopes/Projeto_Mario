const candidatoModel = require("../models/candidato");

exports.getAll = async (req, res) => {
  const candidatos = await candidatoModel.getAllCandidatos();
  res.render("candidato/index", { candidatos });
};

exports.create = async (req, res) => {
  const { nome, cpf, endereco } = req.body;
  await candidatoModel.createCandidato(nome, cpf, endereco);
  res.redirect("/candidatos");
};
