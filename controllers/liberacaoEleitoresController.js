// controllers/liberacaoEleitoresController.js
const LiberacaoEleitores = require("../models/liberacaoEleitores");

exports.index = (req, res) => {
  LiberacaoEleitores.getAll((results) => {
    res.render("liberacaoEleitores/index", { liberacoes: results });
  });
};

exports.create = (req, res) => {
  const data = req.body;
  LiberacaoEleitores.create(data, (results) => {
    res.redirect("/liberacoes");
  });
};
