const pool = require("../config/db");

exports.renderCreateChapa = async (req, res) => {
  try {
    const [eleicoes] = await pool.query("SELECT * FROM Eleicoes");
    res.render("chapa/create", { eleicoes });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar eleições");
  }
};

exports.createChapa = async (req, res) => {
  const { nome, eleicao_id } = req.body;
  try {
    await pool.query("INSERT INTO Chapas (nome, eleicao_id) VALUES (?, ?)", [
      nome,
      eleicao_id,
    ]);
    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao criar chapa");
  }
};
