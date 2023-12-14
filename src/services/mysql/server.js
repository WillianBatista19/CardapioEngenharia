// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'banco',
});

connection.connect();

// Rota para obter todos os usuários
app.get('/api/usuarios', (req, res) => {
    console.log('Ok 1')
    connection.query('SELECT * FROM Produto', (error, results) => {
        console.log('Ok 2')
        if (error) throw error;
        res.json(results);
    });
    // res.json("Oie");
});

// Rota para adicionar um novo usuário
app.post('/api/usuarios', (req, res) => {
    const { nome, email } = req.body;
        connection.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email], (error, results) => {
        if (error) throw error;
        res.json({ id: results.insertId, nome, email });
    });
});

// Rota para atualizar um usuário existente
app.put('/api/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    const { nome, email } = req.body;
    connection.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, userId], (error) => {
        if (error) throw error;
        res.json({ id: userId, nome, email });
    });
});

// Rota para excluir um usuário
app.delete('/api/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    connection.query('DELETE FROM usuarios WHERE id = ?', [userId], (error) => {
        if (error) throw error;
        res.json({ id: userId });
    });
});

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});
