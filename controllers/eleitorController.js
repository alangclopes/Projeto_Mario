const Eleitor = require("../models/eleitor");

exports.listarEleitores = (req, res) => {
  Eleitor.getAll((eleitores) => {
    res.render("eleitor/listar", { eleitores });
  });
};

exports.criarEleitor = (req, res) => {
  const eleitor = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    endereco: req.body.endereco,
    senha: req.body.senha,
    liberado: req.body.liberado || false,
  };
  Eleitor.create(eleitor, () => {
    res.redirect("/eleitores");
  });
};
