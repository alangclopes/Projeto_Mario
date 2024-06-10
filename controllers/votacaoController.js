const votacaoModel = require("../models/votacao");

exports.getAll = async (req, res) => {
  const votacoes = await votacaoModel.getAllVotacoes();
  res.render("votacao/index", { votacoes });
};

exports.create = async (req, res) => {
  const { eleicao_id, data_inicio, data_fim } = req.body;
  await votacaoModel.createVotacao(eleicao_id, data_inicio, data_fim);
  res.redirect("/votacoes");
};
