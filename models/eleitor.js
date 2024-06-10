const pool = require("../config/db");
const bcrypt = require("bcrypt");

async function getAllEleitores() {
  const [rows] = await pool.query("SELECT * FROM Eleitores");
  return rows;
}

async function createEleitor(nome, cpf, endereco, senha) {
  const hashedPassword = await bcrypt.hash(senha, 10);
  const [userResult] = await pool.query(
    "INSERT INTO Users (username, password, role) VALUES (?, ?, ?)",
    [cpf, hashedPassword, "eleitor"]
  );
  const userId = userResult.insertId;
  await pool.query(
    "INSERT INTO Eleitores (nome, cpf, endereco, senha, user_id) VALUES (?, ?, ?, ?, ?)",
    [nome, cpf, endereco, senha, userId]
  );
}

module.exports = {
  getAllEleitores,
  createEleitor,
};
