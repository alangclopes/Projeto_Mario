const Candidato = require("../models/candidato");

exports.getAll = async (req, res) => {
  try {
    const candidatos = await Candidato.getAll();
    res.render("candidato/index", { candidatos, eleitorId: 1 }); // Passar eleitorId como exemplo
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const { nome, cpf, endereco } = req.body;
    await Candidato.create({ nome, cpf, endereco });
    res.redirect("/candidatos");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
