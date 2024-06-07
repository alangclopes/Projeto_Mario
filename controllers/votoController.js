const Voto = require("../models/voto");

exports.listar = async (req, res) => {
  const votos = await Voto.findAll();
  res.render("votos/resultado", { votos });
};

exports.votar = async (req, res) => {
  const { eleicao_id, candidato_id } = req.body;
  const voto = new Voto(eleicao_id, candidato_id);
  await voto.save();
  res.redirect("/votos");
};
