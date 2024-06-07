const pool = require("../utils/database");

class Candidato {
  constructor(nome, cpf, endereco) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
  }

  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM Candidatos");
    return rows;
  }

  async save() {
    await pool.query(
      "INSERT INTO Candidatos (nome, cpf, endereco) VALUES (?, ?, ?)",
      [this.nome, this.cpf, this.endereco]
    );
  }
}

module.exports = Candidato;
