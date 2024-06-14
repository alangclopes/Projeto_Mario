const pool = require("../config/db");

const User = {
  findOne: async (username) => {
    const [rows] = await pool.execute(
      `SELECT * FROM users WHERE username = ?`,
      [username]
    );
    return rows[0];
  },
  findByCpfAndPassword: async (cpf, senha) => {
    const [rows] = await pool.execute(
      `SELECT * FROM eleitores WHERE cpf = ? AND senha = ?`,
      [cpf, senha]
    );
    return rows[0];
  },
};

module.exports = User;
