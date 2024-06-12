const pool = require('../config/db');

const Eleitor = {
    create: async (nome, cpf, endereco, senha) => {
        const [result] = await pool.execute(
            'INSERT INTO Eleitores (nome, cpf, endereco, senha) VALUES (?, ?, ?, ?)',
            [nome, cpf, endereco, senha]
        );
        return result.insertId;
    },
    findAll: async () => {
        const [rows] = await pool.query('SELECT * FROM Eleitores');
        return rows;
    },
    findById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM Eleitores WHERE id = ?', [id]);
        return rows[0];
    }
};

module.exports = Eleitor;
