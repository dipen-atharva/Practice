const { MongoClient, Collection } = require("mongodb");
const uri ="mongodb://localhost:27017/queryPrac";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    await client.db("queryPrac").command({ ping: 1 });
    console.log("Connected successfully to server");
    const cursor = employees.find({});
    await cursor.forEach(doc => console.log(doc));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


