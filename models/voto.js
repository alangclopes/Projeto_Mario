const pool = require("../utils/database");

class Voto {
  constructor(eleicao_id, candidato_id) {
    this.eleicao_id = eleicao_id;
    this.candidato_id = candidato_id;
  }

  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM Votos");
    return rows;
  }

  async save() {
    await pool.query(
      "INSERT INTO Votos (eleicao_id, candidato_id, numero_votos) VALUES (?, ?, 0)",
      [this.eleicao_id, this.candidato_id]
    );
  }
}

module.exports = Voto;
