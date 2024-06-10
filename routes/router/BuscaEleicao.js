const express = require("express");
const router = express.Router();
const path = require('path');


router.get('/BuscaEleicao', async (req, res) => {
    try {
        const connection = await pool.getConnection(); 
        const [rows, fields] = await connection.execute('SELECT id,local, nome FROM eleicao'); 
        connection.release();
        res.json(rows);
    } catch (err) {
        console.error('Erro ao buscar dados:', err);
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
});

router.get('/CadastroChapa', (req, res) => {
    res.sendFile(path.join(__dirname, '../CadastroChapa.html'));
});