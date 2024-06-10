const pool = require("../config/db");

async function findByUsername(username) {
  const [rows] = await pool.query("SELECT * FROM Users WHERE username = ?", [
    username,
  ]);
  return rows[0];
}

async function createUser(username, password, role) {
  await pool.query(
    "INSERT INTO Users (username, password, role) VALUES (?, ?, ?)",
    [username, password, role]
  );
}

module.exports = {
  findByUsername,
  createUser,
};
