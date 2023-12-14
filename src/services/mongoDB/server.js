const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;
const conectaAoBancoDeDado = require('./conectaBanco');

const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.json());

// const mongoUrl = 'mongodb://localhost:27017'; // Altere conforme necessário
// const mongoUrl = 'mongodb+srv://davidwaters503:5gHPskLgrhrutY1S@cluster0.3futgrs.mongodb.net/'
// const dbName = 'EngII'; // Altere conforme necessário

/*
let db;


MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
        return;
    }
    console.log('Conectado ao MongoDB');
    db = client.db(dbName);
});
*/



// Ok - Rota para obter todos os usuários
app.get('/api/usuario/:nome', (req, res) => {
    let nome = req.params.nome;
    console.log(nome);

    readData(nome).catch(console.error);

    async function readData(nome) {

        const collection = await conectaAoBancoDeDado("usuario");
        const filter = { login: nome };
        //console.log(collection);


        const cursor = collection.find(filter);
    
        const data = await cursor.toArray();
        console.log("Documentos encontrados:");
        console.log(data);

        // Fecha a conexão com o banco de dados
        const client = collection.s.db.client;
        client.close();

        return data;
    }
    
});

// Ok - Rota para adicionar um novo usuário
app.get('/api/cadusuario/:nome/:login/:senha', (req, res) => {
    let nomeNovo = req.params.nome;
    let loginNovo = req.params.login;
    let senhaNova = req.params.senha;
    console.log(nomeNovo);
    console.log(loginNovo);
    console.log(senhaNova);

    async function insertData() {
        const collection = await conectaAoBancoDeDado("usuario");
    
        const obj = { nome: nomeNovo, login: loginNovo, senha: senhaNova };
    
        const result = await collection.insertOne(obj);
        console.log(`1 novo usuario inserido com o ID: ${result.insertedId}`);
    
        // Fecha a conexão com o banco de dados
        const client = collection.s.db.client;
        client.close(); 
    }
    
    insertData().catch(console.error);
});

// Rota para atualizar um usuário existente
app.get('/api/cadusuario/:login', (req, res) => {
    async function updateData(filter, update) {
        const collection = await conectaAoBancoDeDado("usuario");
    
        const result = await collection.updateOne(filter, { $set: update });
        console.log(`Documento atualizado: ${result.modifiedCount} documento(s) atualizado(s)`);
    
        // Fecha a conexão com o banco de dados
        const client = collection.s.db.client;
        client.close();
    }
    
    const filter = { login: "Joao" }; // Filtre o documento que deseja atualizar
    const update = { senha: "4321" }; // Os campos a serem atualizados
    
    updateData(filter, update).catch(console.error);
});

// Rota para excluir um usuário
app.delete('/api/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    db.collection('usuarios').deleteOne({ _id: userId }, (error) => {
        if (error) throw error;
        res.json({ id: userId });
    });
});

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});
