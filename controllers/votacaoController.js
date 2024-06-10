const pool = require("../config/db");

// Função para renderizar a página de votação
exports.index = async (req, res) => {
  try {
    const [rows] = await pool.promise().query("SELECT * FROM Candidatos");
    res.render("votacao/index", { candidatos: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao carregar candidatos");
  }
};

// Função para processar o voto
exports.votar = async (req, res) => {
  const { candidatoId } = req.body;
  const eleicaoId = 1; // Ajuste conforme necessário

  try {
    await pool
      .promise()
      .query(
        "UPDATE Votos SET numero_votos = numero_votos + 1 WHERE candidato_id = ? AND eleicao_id = ?",
        [candidatoId, eleicaoId]
      );
    res.redirect("/votacao");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao registrar o voto");
  }
};
