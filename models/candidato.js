const pool = require("../config/db");

async function getAllCandidatos() {
  const [rows] = await pool.query("SELECT * FROM Candidatos");
  return rows;
}

async function createCandidato(nome, cpf, endereco) {
  await pool.query(
    "INSERT INTO Candidatos (nome, cpf, endereco) VALUES (?, ?, ?)",
    [nome, cpf, endereco]
  );
}

module.exports = {
  getAllCandidatos,
  createCandidato,
};
