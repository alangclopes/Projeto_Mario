// Importar o pool de conexões MySQL
const pool = require("../config/db");

// Função para obter todos os cargos
async function getAll() {
  const [rows] = await pool.execute("SELECT * FROM Cargos");
  return rows;
}

// Função para adicionar um novo cargo
async function add(cargo) {
  const { nome, eleicao_id } = cargo;
  const [result] = await pool.execute(
    "INSERT INTO Cargos (cargo, eleicao_id) VALUES (?, ?)",
    [nome, eleicao_id]
  );
  return result.insertId;
}

module.exports = {
  getAll,
  add,
};
