const pool = require("../config/db");

async function getAll() {
  const [rows] = await pool.execute("SELECT * FROM Eleicoes");
  return rows;
}

async function add(eleicao) {
  const { data, local, nome } = eleicao;
  try {
    const [result] = await pool.execute(
      "INSERT INTO Eleicoes (data, local, nome) VALUES (?, ?, ?)",
      [data, local, nome]
    );
    return result.insertId;
  } catch (error) {
    console.error('Erro ao adicionar eleição:', error);
    throw error;
  }
}

module.exports = {
  getAll,
  add,
};
