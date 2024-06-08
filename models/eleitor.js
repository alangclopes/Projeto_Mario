const pool = require("../config/db");

class Eleitor {
  constructor(nome, cpf, endereco, senha, liberado = false) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.senha = senha;
    this.liberado = liberado;
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM Eleitores');
    return rows;
  }

  async save() {
    await pool.query('INSERT INTO Eleitores (nome, cpf, endereco, senha, liberado) VALUES (?, ?, ?, ?, ?)', [this.nome, this.cpf, this.endereco, this.senha, this.liberado]);
  }

  static async findByCpf(cpf) {
    const [rows] = await pool.query('SELECT * FROM Eleitores WHERE cpf = ?', [cpf]);
    return rows[0];
  }
}

module.exports = Eleitor;
