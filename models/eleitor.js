const pool = require("../config/db");

const Eleitor = {
  create: async (eleitor) => {
    const sql = `INSERT INTO eleitores (nome, cpf, predio, andar, numero_apt, senha) VALUES (?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [
      eleitor.nome,
      eleitor.cpf,
      eleitor.predio,
      eleitor.andar,
      eleitor.numero_apt,
      eleitor.senha,
    ]);
    return result;
  },
  findAll: async () => {
    const [rows] = await pool.query(`SELECT * FROM eleitores`);
    return rows;
  },
  findById: async (id) => {
    const [rows] = await pool.execute(`SELECT * FROM eleitores WHERE id = ?`, [
      id,
    ]);
    return rows[0];
  },
  update: async (id, eleitor) => {
    const sql = `UPDATE eleitores SET nome = ?, cpf = ?, predio = ?, andar = ?, numero_apt = ?, senha = ? WHERE id = ?`;
    const [result] = await pool.execute(sql, [
      eleitor.nome,
      eleitor.cpf,
      eleitor.predio,
      eleitor.andar,
      eleitor.numero_apt,
      eleitor.senha,
      id,
    ]);
    return result;
  },
  delete: async (id) => {
    const [result] = await pool.execute(`DELETE FROM eleitores WHERE id = ?`, [
      id,
    ]);
    return result;
  },
};

module.exports = Eleitor;
