const RelatorioInicializacao = require("../models/relatorioInicializacao");

exports.listar = async (req, res) => {
  const relatorios = await RelatorioInicializacao.findAll();
  res.render("relatorios/inicializacao", { relatorios });
};
