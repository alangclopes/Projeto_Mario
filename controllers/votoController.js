const Voto = require("../models/voto");

exports.resultado = async (req, res) => {
  const { eleicaoId } = req.params;
  const votos = await Voto.findByEleicao(eleicaoId);
  res.render("votos/resultado", { votos });
};

exports.votarForm = (req, res) => {
  res.render("votos/votar");
};

exports.votar = async (req, res) => {
  const { eleicaoId, candidatoId } = req.body;
  const novoVoto = new Voto(eleicaoId, candidatoId, 1);
  await novoVoto.save();
  res.redirect(`/votos/resultado/${eleicaoId}`);
};
