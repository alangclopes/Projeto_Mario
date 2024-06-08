const Chapa = require("../models/chapa");

exports.listar = async (req, res) => {
  const chapas = await Chapa.findAll();
  res.render("chapas/listar", { chapas });
};

exports.criar = (req, res) => {
  res.render("chapas/criar");
};

exports.salvar = async (req, res) => {
  const { nome, eleicaoId } = req.body;
  const novaChapa = new Chapa(nome, eleicaoId);
  await novaChapa.save();
  res.redirect("/chapas");
};
