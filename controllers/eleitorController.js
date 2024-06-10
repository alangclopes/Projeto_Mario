const pool = require("../config/db");
const bcrypt = require("bcrypt");

exports.getAll = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM Eleitores");
  res.render("eleitor/index", { eleitores: rows });
};

exports.create = async (req, res) => {
  const { nome, cpf, endereco, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);
  await pool.query(
    "INSERT INTO Eleitores (nome, cpf, endereco, senha) VALUES (?, ?, ?, ?)",
    [nome, cpf, endereco, hashedPassword]
  );
  res.redirect("/eleitores");
};
