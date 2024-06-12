const pool = require("../config/db");

class Chapa {
  static async create(nome, eleicao_id) {
    try {
      const [result] = await pool.query(
        "INSERT INTO Chapas (nome, eleicao_id) VALUES (?, ?)",
        [nome, eleicao_id]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Chapa;
