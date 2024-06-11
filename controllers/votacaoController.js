const Votacao = require("../models/votacao");

exports.create = async (req, res) => {
  try {
    await Votacao.create(req.body);
    res.redirect("/votacoes");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const votacoes = await Votacao.findAll();
    res.render("votacao/index", { votacoes });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findById = async (req, res) => {
  try {
    const votacao = await Votacao.findById(req.params.id);
    res.render("votacao/edit", { votacao });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    await Votacao.update(req.params.id, req.body);
    res.redirect("/votacoes");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Votacao.delete(req.params.id);
    res.redirect("/votacoes");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
