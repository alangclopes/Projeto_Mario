const pool = require("../config/db");

exports.getAll = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM Votacoes");
  res.render("votacao/index", { votacoes: rows });
};

exports.vote = async (req, res) => {
  const { eleicao_id, candidato_id } = req.body;
  await pool.query(
    "INSERT INTO Votos (eleicao_id, candidato_id, numero_votos) VALUES (?, ?, 1) ON DUPLICATE KEY UPDATE numero_votos = numero_votos + 1",
    [eleicao_id, candidato_id]
  );
  res.redirect("/votacoes");
};
