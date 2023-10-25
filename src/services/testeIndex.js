/*  npm update
    npm init -y
    npm start
    npm install mongodb
*/
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://davidwaters503:5gHPskLgrhrutY1S@cluster0.3futgrs.mongodb.net/";

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB");

    const db = client.db("EngII");
    const collection = db.collection("usuario");

    const obj = { login: "David", senha: "123" };

    const result = await collection.insertOne(obj);
    console.log(`1 novo curso inserido com o ID: ${result.insertedId}`);
  } catch (error) {
    console.error("Erro ao inserir o curso:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
