const db = require("../config/db");

class Candidato {
  static async getAll() {
    try {
      const [results] = await db.query("SELECT * FROM Candidatos");
      return results;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async create(candidato) {
    try {
      const { nome, cpf, endereco } = candidato;
      const [result] = await db.query(
        "INSERT INTO Candidatos (nome, cpf, endereco) VALUES (?, ?, ?)",
        [nome, cpf, endereco]
      );
      return result.insertId;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = Candidato;
