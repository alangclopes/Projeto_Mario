const pool = require('../config/db');

exports.getChapas = async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM Chapas');
        connection.release();
        
        res.json(rows); // Retorna as chapas como JSON para a página de votação
    } catch (error) {
        console.error('Erro ao buscar chapas:', error);
        res.status(500).json({ error: 'Erro interno ao buscar chapas' });
    }
};
