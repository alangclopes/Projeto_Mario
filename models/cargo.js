const pool = require("../config/db");

class Cargo {
  constructor(cargo, eleicaoId) {
    this.cargo = cargo;
    this.eleicaoId = eleicaoId;
  }

  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM Cargos");
    return rows;
  }

  async save() {
    await pool.query("INSERT INTO Cargos (cargo, eleicao_id) VALUES (?, ?)", [
      this.cargo,
      this.eleicaoId,
    ]);
  }
}

module.exports = Cargo;
