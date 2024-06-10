const db = require("../config/db");

class Votacao {
  static async votar(eleitorId, candidatoId) {
    const [result] = await db.query(
      "INSERT INTO Votos (eleitor_id, candidato_id) VALUES (?, ?)",
      [eleitorId, candidatoId]
    );
    return result.insertId;
  }
}

module.exports = Votacao;
