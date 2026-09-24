import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import 'dotenv/config';
import express from 'express'
import {MongoClient, ServerApiVersion} from 'mongodb';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uri = process.env.MONGO_URI;
const app = express();
const client = new MongoClient(uri, {




});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public', 'hotel.html'));

})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/api/hello', function(req, res) {
    const message = {
      message : 'hello from hard code json',
      success : true
    };
    res.json(message);

  }
);

app.listen(5500, () => {
  console.log('Server is running on http://localhost:5500')
})