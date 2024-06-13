const pool = require("../config/db");

async function getAll() {
  const [rows] = await pool.execute("SELECT * FROM Eleicoes");
  return rows;
}

async function add(eleicao) {
  const { data, local } = eleicao;
  const [result] = await pool.execute(
    "INSERT INTO Eleicoes (data, local) VALUES (?, ?)",
    [data, local]
  );
  return result.insertId;
}

module.exports = {
  getAll,
  add,
};
