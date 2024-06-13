const pool = require("../config/db");

class CandidatoChapa {
  static async add(candidatoChapa) {
    const { candidato, chapa, cargo } = candidatoChapa;
    const query = `
      INSERT INTO Candidatos (nome, chapa_id, cargo_id) 
      VALUES (?, 
        (SELECT id FROM Chapas WHERE nome = ?), 
        (SELECT id FROM Cargos WHERE cargo = ?)
      )`;

    const [result] = await pool.query(query, [candidato, chapa, cargo]);
    return result.insertId;
  }
}

module.exports = CandidatoChapa;
