const RelatorioFinalizacao = require("../models/relatorioFinalizacao");

exports.listar = async (req, res) => {
  const relatorios = await RelatorioFinalizacao.findAll();
  res.render("relatorios/finalizacao", { relatorios });
};
