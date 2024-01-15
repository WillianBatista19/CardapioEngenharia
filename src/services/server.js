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

// Ok - Rota para verificar email e senha
app.get('/api/usuario/:email/:senha', (req, res) => {
    let email = req.params.email;
    let senha = req.params.senha;
    console.log(email);
    console.log(senha);

    readData(email, senha).catch(console.error);

    async function readData(email, senha) {

        const collection = await conectaAoBancoDeDado("usuario");
        const filter = { login: email, senha: senha};

        const cursor = collection.find(filter);
    
        const data = await cursor.toArray();
        // eslint-disable-next-line no-undef
        
        console.log("Documentos encontrados:");
        console.log(data);

        // Fecha a conexão com o banco de dados
        const client = collection.s.db.client;
        client.close();

        return data;
    }
    
});

/* // Ok - Rota para adicionar um novo produto
app.get('/api/cadproduto/:nome/:descricao/:preco', (req, res) => {
    let nomeNovo = req.params.nome;
    let descricaoNova = req.params.descricao;
    let precoNovo = req.params.preco;
    console.log(nomeNovo);
    console.log(descricaoNova);
    console.log(precoNovo);

    async function insertData() {
        const collection = await conectaAoBancoDeDado("produto");
    
        const obj = { nome: nomeNovo, descricao: descricaoNova, preco: precoNovo };
    
        const result = await collection.insertOne(obj);
        console.log(`1 novo produto inserido com o ID: ${result.insertedId}`);
    
        // Fecha a conexão com o banco de dados
        const client = collection.s.db.client;
        client.close(); 
    }
    
    insertData().catch(console.error);
});*/

// Ok - Rota para adicionar um novo produto
app.get('/api/cadproduto/:nome/:preco', (req, res) => {
    let nomeNovo = req.params.nome;
    let precoNovo = req.params.preco;
    console.log(nomeNovo);
    console.log(precoNovo);

    async function insertData() {
        const collection = await conectaAoBancoDeDado("produto");
    
        const obj = { nome: nomeNovo, preco: precoNovo };
    
        const result = await collection.insertOne(obj);
        console.log(`1 novo produto inserido com o ID: ${result.insertedId}`);
    
        // Fecha a conexão com o banco de dados
        const client = collection.s.db.client;
        client.close(); 
    }
    
    insertData().catch(console.error);
});

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




// Ok - Rota para exibir todos os produtos
app.get('/api/exibetodosprodutos/', (req, res) => {
    //let nome = req.params.nome;
    //console.log(nome);

    readData().catch(console.error);

    async function readData() {

        const collection = await conectaAoBancoDeDado("produto");
        // const filter = { login: nome };
        // console.log(collection);


        const cursor = collection.find();
    
        const data = await cursor.toArray();
        console.log("Documentos encontrados:");
        console.log(data);

        // Fecha a conexão com o banco de dados
        const client = collection.s.db.client;
        client.close();

        return data;
    }
    
    
});



app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});
