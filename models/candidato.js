const pool = require("../config/db");

const Candidato = {
  create: async (candidato) => {
    const sql = `INSERT INTO candidatos (nome, partido) VALUES (?, ?)`;
    const [result] = await pool.execute(sql, [
      candidato.nome,
      candidato.partido,
    ]);
    return result;
  },
  findAll: async () => {
    const [rows] = await pool.query(`SELECT * FROM candidatos`);
    return rows;
  },
  findById: async (id) => {
    const [rows] = await pool.execute(`SELECT * FROM candidatos WHERE id = ?`, [
      id,
    ]);
    return rows[0];
  },
  update: async (id, candidato) => {
    const sql = `UPDATE candidatos SET nome = ?, partido = ? WHERE id = ?`;
    const [result] = await pool.execute(sql, [
      candidato.nome,
      candidato.partido,
      id,
    ]);
    return result;
  },
  delete: async (id) => {
    const [result] = await pool.execute(`DELETE FROM candidatos WHERE id = ?`, [
      id,
    ]);
    return result;
  },
};

module.exports = Candidato;
