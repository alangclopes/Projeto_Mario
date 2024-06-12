const pool = require("../config/db");

const User = {
  create: async (user) => {
    const sql = `INSERT INTO users (username, password, role) VALUES (?, ?)`;
    const [result] = await pool.execute(sql, [
      user.username,
      user.password,
    ]);
    return result;
  },
  findOne: async (username) => {
    const [rows] = await pool.execute(
      `SELECT * FROM users WHERE username = ?`,
      [username]
    );
    return rows[0];
  },
};

module.exports = User;
