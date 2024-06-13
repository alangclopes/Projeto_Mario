const CandidatoChapa = require("../models/candidatoChapa");

exports.showForm = (req, res) => {
  res.render("candidatoChapa/index");
};

exports.addCandidatoChapa = async (req, res) => {
  const { candidato, chapa, cargo } = req.body;

  if (!candidato || !chapa || !cargo) {
    return res.status(400).send("Por favor, preencha todos os campos.");
  }

  try {
    const newCandidatoChapa = { candidato, chapa, cargo };
    const candidatoChapaId = await CandidatoChapa.add(newCandidatoChapa);
    res.redirect("/candidatoChapa"); // Redireciona para a lista ou formulário após o cadastro
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao cadastrar o candidato na chapa.");
  }
};
