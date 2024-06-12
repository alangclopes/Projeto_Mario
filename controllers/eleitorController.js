const Eleitor = require("../models/eleitor");
const bcrypt = require("bcrypt");

exports.createEleitor = async (req, res) => {
  const { nome, cpf, endereco, senha } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    await Eleitor.create(nome, cpf, endereco, hashedPassword);
    res.redirect("/eleitores");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao cadastrar eleitor");
  }
};

exports.getAllEleitores = async (req, res) => {
  try {
    const eleitores = await Eleitor.findAll();
    res.render("eleitor/index", { eleitores });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar eleitores");
  }
};

exports.getEleitorForm = (req, res) => {
  res.render("eleitor/create");
};
