const pool = require("../config/db");

const User = {
  findOne: async (username) => {
    const [rows] = await pool.execute(
      `SELECT * FROM users WHERE username = ?`,
      [username]
    );
    return rows[0];
  },
  findOneByCpf: async (cpf) => {
    const [rows] = await pool.execute(
      `SELECT * FROM users WHERE cpf = ?`,
      [cpf]
    );
    return rows[0];
  }
};

module.exports = User;
