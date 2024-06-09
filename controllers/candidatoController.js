const Candidato = require("../models/candidato");

exports.listarCandidatos = (req, res) => {
  Candidato.getAll((candidatos) => {
    res.render("candidato/listar", { candidatos });
  });
};

exports.criarCandidato = (req, res) => {
  const candidato = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    endereco: req.body.endereco,
  };
  Candidato.create(candidato, () => {
    res.redirect("/candidatos");
  });
};
