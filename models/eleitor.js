const pool = require('../config/db');

async function getAllEleitores() {
  const [rows] = await pool.query('SELECT * FROM Eleitores');
  return rows;
}

async function createEleitor(nome, cpf, endereco, senha) {
  await pool.query('INSERT INTO Eleitores (nome, cpf, endereco, senha) VALUES (?, ?, ?, ?)', [nome, cpf, endereco, senha]);
}

module.exports = {
  getAllEleitores,
  createEleitor
};
