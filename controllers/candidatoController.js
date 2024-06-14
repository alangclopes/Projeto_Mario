const Candidato = require("../models/candidato");

exports.createCandidato = async (req, res) => {
  const { nome, cpf, endereco } = req.body;
  try {
    await Candidato.create(nome, cpf, endereco);
    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao cadastrar candidato");
  }
};

exports.getAllCandidatos = async (req, res) => {
  try {
    const candidatos = await Candidato.findAll();
    res.render("candidato/index", { candidatos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar candidatos");
  }
};

exports.getCandidatoForm = (req, res) => {
  res.render("candidato/create");
};
