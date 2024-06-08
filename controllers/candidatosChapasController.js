const Candidato = require("../models/candidato");

exports.listar = async (req, res) => {
  const candidatos = await Candidato.findAll();
  res.render("candidatos/listar", { candidatos });
};

exports.criar = (req, res) => {
  res.render("candidatos/criar");
};

exports.salvar = async (req, res) => {
  const { nome, cpf, endereco } = req.body;
  const candidato = new Candidato(nome, cpf, endereco);
  await candidato.save();
  res.redirect("/candidatos");
};
