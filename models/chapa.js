const pool = require("../config/db");

class Chapa {
  constructor(nome, eleicaoId) {
    this.nome = nome;
    this.eleicaoId = eleicaoId;
  }

  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM Chapas");
    return rows;
  }

  async save() {
    await pool.query("INSERT INTO Chapas (nome, eleicao_id) VALUES (?, ?)", [
      this.nome,
      this.eleicaoId,
    ]);
  }
}

module.exports = Chapa;
