const Candidato = require("../models/candidato");

exports.create = async (req, res) => {
  try {
    await Candidato.create(req.body);
    res.redirect("/candidatos");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const candidatos = await Candidato.findAll();
    res.render("candidato/index", { candidatos });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findById = async (req, res) => {
  try {
    const candidato = await Candidato.findById(req.params.id);
    res.render("candidato/edit", { candidato });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    await Candidato.update(req.params.id, req.body);
    res.redirect("/candidatos");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Candidato.delete(req.params.id);
    res.redirect("/candidatos");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
