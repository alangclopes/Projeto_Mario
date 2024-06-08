const pool = require("../config/db");

class Voto {
  constructor(eleicaoId, candidatoId, numeroVotos) {
    this.eleicaoId = eleicaoId;
    this.candidatoId = candidatoId;
    this.numeroVotos = numeroVotos;
  }

  static async findByEleicao(eleicaoId) {
    const [rows] = await pool.query(
      "SELECT * FROM Votos WHERE eleicao_id = ?",
      [eleicaoId]
    );
    return rows;
  }

  async save() {
    await pool.query(
      "INSERT INTO Votos (eleicao_id, candidato_id, numero_votos) VALUES (?, ?, ?)",
      [this.eleicaoId, this.candidatoId, this.numeroVotos]
    );
  }
}

module.exports = Voto;
