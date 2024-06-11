const pool = require("../config/db");

exports.findAll = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM eleitores");
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findById = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await pool.query("SELECT * FROM eleitores WHERE id = ?", [
      id,
    ]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).send("Eleitor not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.create = async (req, res) => {
  const { nome, cpf, predio, andar, numero_apt, senha } = req.body;

  // Verificar se todos os campos necessários estão presentes
  if (!nome || !cpf || !predio || !andar || !numero_apt || !senha) {
    return res.status(400).send("All fields are required");
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO eleitores (nome, cpf, predio, andar, numero_apt, senha) VALUES (?, ?, ?, ?, ?, ?)",
      [nome, cpf, predio, andar, numero_apt, senha]
    );
    res.status(201).send(`Eleitor created with ID: ${result.insertId}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const { nome, cpf, predio, andar, numero_apt, senha } = req.body;

  // Verificar se todos os campos necessários estão presentes
  if (!nome || !cpf || !predio || !andar || !numero_apt || !senha) {
    return res.status(400).send("All fields are required");
  }

  try {
    const [result] = await pool.query(
      "UPDATE eleitores SET nome = ?, cpf = ?, predio = ?, andar = ?, numero_apt = ?, senha = ? WHERE id = ?",
      [nome, cpf, predio, andar, numero_apt, senha, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).send("Eleitor not found");
    }
    res.send("Eleitor updated successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query("DELETE FROM eleitores WHERE id = ?", [
      id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).send("Eleitor not found");
    }
    res.send("Eleitor deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
