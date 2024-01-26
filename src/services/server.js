const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const conectaAoBancoDeDado = require('./conectaBanco');

const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.json());

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

// Ok - Rota para adicionar um novo produto
app.get('/api/cadproduto/:id/:nome/:descricao/:preco/:imagem', (req, res) => {
    let idNovo = req.params.id;
    idNovo = parseInt(idNovo, 10)
    let nomeNovo = req.params.nome;
    let descricaoNova = req.params.descricao;
    let precoNovo = req.params.preco;
    precoNovo = Number(precoNovo);
    let imagemNova = req.params.imagem;

    if (imagemNova == null || imagemNova === '' || imagemNova === "null"|| imagemNova === 'null') {
        imagemNova = null;
    } 

    async function insertData() {
        const collection = await conectaAoBancoDeDado("produto");

        const obj = {id: idNovo, name: nomeNovo, price: precoNovo, description: descricaoNova, image: imagemNova };
    
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

// Ok - Rota para atualizar um produto
app.get('/api/atualizaproduto/:id/:nome/:descricao/:preco/:imagem', (req, res) => {
    let nomeNovo = req.params.nome;
    let idNovo = req.params.id;
    idNovo = parseInt(idNovo, 10)
    let descricaoNova = req.params.descricao;
    let precoNovo = req.params.preco;
    precoNovo = Number(precoNovo);
    let imagemNova = req.params.imagem;

    if (imagemNova == null || imagemNova === '' || imagemNova === "null"|| imagemNova === 'null') {
        imagemNova = null;
    } 

    const update = { name: nomeNovo, price: precoNovo, description: descricaoNova, image: imagemNova };

    const filter = { id: idNovo }

    async function updateData(filter, update) {
        const collection = await conectaAoBancoDeDado("produto");

        const result = await collection.updateOne(filter, { $set: update });
        console.log(`Documento atualizado: ${result.modifiedCount} documento(s) atualizado(s)`);

        // Fecha a conexão com o banco de dados
        const client = collection.s.db.client;
        client.close();
    }

    // const filter = { login: "Joao" }; // Filtre o documento que deseja atualizar
    // const update = { senha: "4321" }; // Os campos a serem atualizados

    updateData(filter, update).catch(console.error);
});

// Ok - Rota para excluir um produto
app.get('/api/excluiproduto/:id', (req, res) => {
    let idCondenado = req.params.id;
    idCondenado = parseInt(idCondenado, 10)
    
    const filter = { id: idCondenado };

    async function deleteData(filter) {
        const collection = await conectaAoBancoDeDado("produto");

        const result = await collection.deleteOne(filter);
        console.log(`Documento excluído: ${result.deletedCount} documento(s) excluído(s)`);

        // Fecha a conexão com o banco de dados
        const client = collection.s.db.client;
        client.close();
    }

    // const filter = { login: "Curso de node" }; // Filtre o documento que deseja excluir

    deleteData(filter).catch(console.error);
});

// Ok - Rota para exibir todos os produtos
app.get('/api/exibetodosprodutos/', async (req, res) => {
    try {
        const data = await readData();
        // Remova o campo "_id" de cada documento
        const dataWithoutId = data.map(doc => {
            const { _id, ...rest } = doc;
            return rest;
        });

        res.json(dataWithoutId);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao obter os dados do banco de dados.');
    }
});

async function readData() {
    const collection = await conectaAoBancoDeDado("produto");
    const cursor = collection.find();
    const data = await cursor.toArray();
    console.log("Documentos encontrados:");
    console.log(data);

    // Fecha a conexão com o banco de dados
    const client = collection.s.db.client;
    client.close();

    return data;
}

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});
