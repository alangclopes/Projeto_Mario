const pool = require("../config/db");

const Candidato = {
  create: async (nome, cpf, endereco) => {
    const [result] = await pool.execute(
      "INSERT INTO Candidatos (nome, cpf, endereco) VALUES (?, ?, ?)",
      [nome, cpf, endereco]
    );
    return result.insertId;
  },
  findAll: async () => {
    const [rows] = await pool.query("SELECT * FROM Candidatos");
    return rows;
  },
  findById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM Candidatos WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },
};

module.exports = Candidato;
