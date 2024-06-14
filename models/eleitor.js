const pool = require('../config/db');

const Eleitor = {
    create: async (nome, cpf, predio, andar, numero_apartamento, senha) => {
        const [result] = await pool.execute(
            'INSERT INTO Eleitores (nome, cpf, predio, andar, numero_apartamento, senha) VALUES (?, ?, ?, ?, ?, ?)',
            [nome, cpf, predio, andar, numero_apartamento, senha]
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
