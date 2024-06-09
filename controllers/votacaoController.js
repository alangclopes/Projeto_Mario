const Votacao = require("../models/votacao");

exports.listarVotacoes = (req, res) => {
  Votacao.getAll((votacoes) => {
    res.render("votacao/listar", { votacoes });
  });
};

exports.criarVotacao = (req, res) => {
  const votacao = {
    eleicao_id: req.body.eleicao_id,
    data_inicio: req.body.data_inicio,
    data_fim: req.body.data_fim,
  };
  Votacao.create(votacao, () => {
    res.redirect("/votacao");
  });
};
