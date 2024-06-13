const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Middleware para analisar JSON

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'sistema_votacao_condominio',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/getchapas', async (req, res) => {
    try {
        const sql = `
            SELECT 
                chapas.id, 
                chapas.nome AS nome_chapa, 
                cargos.cargo AS cargo, 
                candidatos.nome AS nome_candidato
            FROM chapas
            INNER JOIN candidatoschapas ON chapas.id = candidatoschapas.chapa_id
            INNER JOIN cargos ON candidatoschapas.cargo_id = cargos.id
            INNER JOIN candidatos ON candidatoschapas.candidato_id = candidatos.id
        `;
        const [rows, fields] = await pool.query(sql);
        const chapas = {};
        rows.forEach(row => {
            const chapaId = row.id;
            if (!chapas[chapaId]) {
                chapas[chapaId] = {
                    id: row.id,
                    nome: row.nome_chapa,
                    candidatos: []
                };
            }
            chapas[chapaId].candidatos.push({
                cargo: row.cargo,
                nome: row.nome_candidato
            });
        });
        res.json(Object.values(chapas)); 
    } catch (err) {
        console.error('Erro ao buscar as chapas:', err);
        res.status(500).json({ error: 'Erro ao buscar as chapas' });
    }
});

app.use(express.static(path.join(__dirname, 'SelecaoCandidato')));

app.get('/chara', (req, res) => {
    res.sendFile(path.join(__dirname, './SelecaoCandidato/SeleçãoCandidato.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
