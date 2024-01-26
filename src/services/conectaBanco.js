const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://davidwaters503:5gHPskLgrhrutY1S@cluster0.3futgrs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function conectaAoBancoDeDado(tabela) {
    await client.connect();
    console.log("Conectado ao MongoDB");

    const db = client.db("EngII");
    const collection = db.collection(tabela);

    return collection;
}

module.exports = conectaAoBancoDeDado;
