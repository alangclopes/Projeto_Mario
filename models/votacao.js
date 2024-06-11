const pool = require("../config/db");

const Votacao = {
  create: async (votacao) => {
    const sql = `INSERT INTO votacoes (eleitor_id, candidato_id) VALUES (?, ?)`;
    const [result] = await pool.execute(sql, [
      votacao.eleitor_id,
      votacao.candidato_id,
    ]);
    return result;
  },
  findAll: async () => {
    const [rows] = await pool.query(`SELECT * FROM votacoes`);
    return rows;
  },
  findById: async (id) => {
    const [rows] = await pool.execute(`SELECT * FROM votacoes WHERE id = ?`, [
      id,
    ]);
    return rows[0];
  },
  update: async (id, votacao) => {
    const sql = `UPDATE votacoes SET eleitor_id = ?, candidato_id = ? WHERE id = ?`;
    const [result] = await pool.execute(sql, [
      votacao.eleitor_id,
      votacao.candidato_id,
      id,
    ]);
    return result;
  },
  delete: async (id) => {
    const [result] = await pool.execute(`DELETE FROM votacoes WHERE id = ?`, [
      id,
    ]);
    return result;
  },
};

module.exports = Votacao;
