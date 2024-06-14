const CandidatoChapa = require("../models/candidatoChapa");
const pool = require("../config/db");

exports.showForm = (req, res) => {
  res.render("candidatoChapa/index");
};
exports.getOpcoes = async (req, res) => {
  try {
      const [chapas] = await pool.query("SELECT id, nome FROM Chapas");
      const [cargos] = await pool.query("SELECT id, cargo FROM Cargos");

      res.json({ chapas, cargos });
  } catch (error) {
      console.error('Erro ao carregar opções de Chapa e Cargo:', error);
      res.status(500).json({ error: 'Erro ao carregar opções de Chapa e Cargo' });
  }
};

exports.addCandidatoChapa = async (req, res) => {
  try {
      const { nome, chapa, cargo } = req.body;

      const [chapaRow] = await pool.query("SELECT id FROM Chapas WHERE nome = ?", [chapa]);
      if (chapaRow.length === 0) {
          throw new Error(`Chapa '${chapa}' não encontrada no banco de dados.`);
      }
      const chapaId = chapaRow[0].id;

      const [cargoRow] = await pool.query("SELECT id FROM Cargos WHERE cargo = ?", [cargo]);
      if (cargoRow.length === 0) {
          throw new Error(`Cargo '${cargo}' não encontrado no banco de dados.`);
      }
      const cargoId = cargoRow[0].id;

      const candidatoChapa = {
          nome,
          chapaId,
          cargoId
      };

  
      res.redirect('/dashboard');

  } catch (error) {
      console.error('Erro ao adicionar candidato em chapa:', error);
      res.status(500).send('Erro ao adicionar candidato em chapa');
  }
};