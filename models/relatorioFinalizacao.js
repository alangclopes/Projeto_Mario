const pool = require("../config/db");

class RelatorioFinalizacao {
  constructor(
    eleicaoId,
    dataHoraFechamento,
    totalEleitoresVotaram,
    arquivoPdf
  ) {
    this.eleicaoId = eleicaoId;
    this.dataHoraFechamento = dataHoraFechamento;
    this.totalEleitoresVotaram = totalEleitoresVotaram;
    this.arquivoPdf = arquivoPdf;
  }

  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM RelatorioFinalizacao");
    return rows;
  }

  async save() {
    await pool.query(
      "INSERT INTO RelatorioFinalizacao (eleicao_id, data_hora_fechamento, total_eleitores_votaram, arquivo_pdf) VALUES (?, ?, ?, ?)",
      [
        this.eleicaoId,
        this.dataHoraFechamento,
        this.totalEleitoresVotaram,
        this.arquivoPdf,
      ]
    );
  }
}

module.exports = RelatorioFinalizacao;
