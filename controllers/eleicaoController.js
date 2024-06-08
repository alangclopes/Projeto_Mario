const Eleicao = require("../models/eleicao");

exports.listar = async (req, res) => {
  const eleicoes = await Eleicao.findAll();
  res.render("eleicoes/listar", { eleicoes });
};

exports.criar = (req, res) => {
  res.render("eleicoes/criar");
};

exports.salvar = async (req, res) => {
  const { data, local, nome } = req.body;
  const novaEleicao = new Eleicao(data, local, nome);
  await novaEleicao.save();
  res.redirect("/eleicoes");
};
