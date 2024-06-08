const pool = require("../config/db");

class RelatorioInicializacao {
  constructor(eleicaoId, dataHoraAbertura, totalEleitores, arquivoPdf) {
    this.eleicaoId = eleicaoId;
    this.dataHoraAbertura = dataHoraAbertura;
    this.totalEleitores = totalEleitores;
    this.arquivoPdf = arquivoPdf;
  }

  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM RelatorioInicializacao");
    return rows;
  }

  async save() {
    await pool.query(
      "INSERT INTO RelatorioInicializacao (eleicao_id, data_hora_abertura, total_eleitores, arquivo_pdf) VALUES (?, ?, ?, ?)",
      [
        this.eleicaoId,
        this.dataHoraAbertura,
        this.totalEleitores,
        this.arquivoPdf,
      ]
    );
  }
}

module.exports = RelatorioInicializacao;
