const Eleitor = require("../models/eleitor");

exports.listar = async (req, res) => {
  const eleitores = await Eleitor.findAll();
  res.render("eleitores/listar", { eleitores });
};

exports.criar = (req, res) => {
  res.render("eleitores/criar");
};

exports.salvar = async (req, res) => {
  const { nome, cpf, endereco, senha } = req.body;
  const novoEleitor = new Eleitor(nome, cpf, endereco, senha);
  await novoEleitor.save();
  res.redirect("/eleitores");
};

exports.loginForm = (req, res) => {
  res.render("eleitores/login");
};

exports.login = async (req, res) => {
  const { cpf, senha } = req.body;
  const eleitor = await Eleitor.findByCpf(cpf);
  if (eleitor && eleitor.senha === senha) {
    req.session.eleitorId = eleitor.id;
    res.redirect("/");
  } else {
    res.status(401).send("CPF ou senha incorretos");
  }
};
