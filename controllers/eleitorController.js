const pool = require("../config/db");
const bcrypt = require("bcrypt");

// Exibir a página de cadastro de eleitor
exports.showRegisterForm = (req, res) => {
  res.render("eleitor/index");
};

// Processar o cadastro de eleitor
exports.registerEleitor = async (req, res) => {
  const { nome, cpf, predio, andar, numero_apt, senha } = req.body;
  const endereco = `Predio ${predio}, Andar ${andar}, Apt ${numero_apt}`;
  const hashedPassword = await bcrypt.hash(senha, 10);

  try {
    await pool
      .promise()
      .query(
        "INSERT INTO Eleitores (nome, cpf, endereco, senha) VALUES (?, ?, ?, ?)",
        [nome, cpf, endereco, hashedPassword]
      );
    await pool
      .promise()
      .query("INSERT INTO Users (username, password, role) VALUES (?, ?, ?)", [
        cpf,
        hashedPassword,
        "eleitor",
      ]);
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao cadastrar eleitor");
  }
};

// Listar eleitores (se necessário)
exports.listEleitores = async (req, res) => {
  try {
    const [rows] = await pool.promise().query("SELECT * FROM Eleitores");
    res.render("eleitor/list", { eleitores: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao listar eleitores");
  }
};
