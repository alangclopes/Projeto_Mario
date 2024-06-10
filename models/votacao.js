const pool = require("../config/db");

async function getAllVotacoes() {
  const [rows] = await pool.query("SELECT * FROM Votacoes");
  return rows;
}

async function createVotacao(eleicao_id, data_inicio, data_fim) {
  await pool.query(
    "INSERT INTO Votacoes (eleicao_id, data_inicio, data_fim) VALUES (?, ?, ?)",
    [eleicao_id, data_inicio, data_fim]
  );
}

module.exports = {
  getAllVotacoes,
  createVotacao,
};
