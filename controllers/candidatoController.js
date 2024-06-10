const pool = require("../config/db");

exports.getAll = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM Candidatos");
  res.render("candidato/index", { candidatos: rows });
};

exports.create = async (req, res) => {
  const { nome, cpf, endereco } = req.body;
  await pool.query(
    "INSERT INTO Candidatos (nome, cpf, endereco) VALUES (?, ?, ?)",
    [nome, cpf, endereco]
  );
  res.redirect("/candidatos");
};
