const pool = require("../utils/database");

class Eleicao {
  constructor(data, local, nome) {
    this.data = data;
    this.local = local;
    this.nome = nome;
  }

  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM Eleicoes");
    return rows;
  }

  async save() {
    await pool.query(
      "INSERT INTO Eleicoes (data, local, nome) VALUES (?, ?, ?)",
      [this.data, this.local, this.nome]
    );
  }
}

module.exports = Eleicao;
