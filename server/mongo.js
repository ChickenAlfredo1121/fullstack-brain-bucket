// require('dotenv').config()
import 'dotenv/config';
// const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { ObjectId } from 'mongodb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const uri = process.env.MONGO_URI;

app.use(express.static(join(__dirname, '../public')));
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const db = client.db('index');
const collection = db.collection('items');





app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public', 'index.html'));
})


//iss08, get all items. 
//iss10 in here also, refactored this endpoint for all or filtered itemss FILTER
app.get('/api/items', async function (req, res) {

  //iss10 stuff
  
  const category = req.query.category;

  // console.log('iss10 category.', category);

  const filter =
    category
      ? {
        category: category
      }
      : {};
  //end iss10 new stuff

  const records =
    await collection
      // .find({}) remove for iss10
      .find(filter) //add for iss10
      .toArray();

  res.json(records);

}
);

//iss09. get one GET ONE
app.get('/api/items/:id', async function (req, res) {

  const id =
    new ObjectId(
      req.params.id
    );

  const record =
    await collection
      .findOne({
        _id: id
      });

  res.json(record);

}
);

//iss 11, notice post to slash api/items != get to slash of same name ADD ONE
app.post('/api/items', async function(req, res) {
    const newItem = req.body;
    const result = await collection.insertOne(newItem);
    res.status(201).json(result);
});

app.post('/api/students', function (req, res) {
  console.log(req.body);

  res.json({
    received:
      req.body
  });
}
);


//clear it all DELETE ALL
app.delete('/api/dev/clear', async function (req, res) {
  const result =
    await collection
      .deleteMany({});
  res.json(result);
}
);


//iss12 UPDATE
app.patch('/api/items/:id',
  async function(req, res) {
    const id = new ObjectId(req.params.id);
    const changes = req.body;
    const result = await collection
        .updateOne({ _id: id }, { $set: changes });
    res.json(result);
});

//iss20 DELETE
app.delete('/api/items/:id',
  async function(req, res) {
    const id = new ObjectId(req.params.id);
    const result = await collection.deleteOne({ _id: id });
    res.json(result);
});

//start up server

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
}); 