const pool = require("../config/db");

class CandidatoChapa {
  static async add(candidatoChapa) {
    const { nome, chapaId, cargoId } = candidatoChapa;
    const query = `
      INSERT INTO candidatoschapas (candidato_id, chapa_id, cargo_id) 
      VALUES (
        (SELECT id FROM candidatos WHERE nome = ?),
        ?,
        ?
      )`;

    const [result] = await pool.query(query, [nome, chapaId, cargoId]);
    return result.insertId;
  }
}


module.exports = CandidatoChapa;
