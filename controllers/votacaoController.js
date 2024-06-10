const Votacao = require("../models/votacao");

exports.votar = async (req, res) => {
  try {
    const { eleitorId, candidatoId } = req.body;
    await Votacao.votar(eleitorId, candidatoId);
    res.redirect("/candidatos");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
