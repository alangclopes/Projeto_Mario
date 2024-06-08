// controllers/candidatoController.js
const Candidato = require("../models/candidato");

exports.index = (req, res) => {
  Candidato.getAll((results) => {
    res.render("candidatos/index", { candidatos: results });
  });
};

exports.create = (req, res) => {
  const data = req.body;
  Candidato.create(data, (results) => {
    res.redirect("/candidatos");
  });
};
