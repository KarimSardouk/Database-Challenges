const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

// Set up a basic route
app.get('/api', (req, res) => {
  res.send('Hello world');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

const uri = "mongodb+srv://karim:manchesterunited@cluster0.mu3bovl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Define a route to create a user
app.post('/api/users', async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db("cluster0"); // Replace with your actual database name
    const collection = database.collection("users");

    // Assuming req.body contains the user information
    const userDocument = req.body;

    const result = await collection.insertOne(userDocument);
    if (result.acknowledged) {
      console.log(`Inserted 1 document into the collection.`);
      res.status(201).json({ message: 'User created successfully' });
    } else {
      console.log(`Insertion was not acknowledged.`);
      res.status(500).json({ error: 'Internal server error' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});




//New code here
import mongoose from 'mongoose';
const express = require('express');
const app = express();

// Set up a basic route
app.get('/api', (req, res) => {
  res.send('Welcome to the API!');
});

app.listen(5000, () => {
  console.log('Server is running on port 3000');
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://karim:manchesterunited@cluster0.mu3bovl.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected to MongoDB!");

    // Specify the database and collection
    const database = client.db("cluster0"); // Replace with your actual database name
    const collection = database.collection("users");
  }
}

//
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
app.use(bodyParser.json());

// Set up a basic route
app.get('/api', (req, res) => {
  res.send('Welcome to the API!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model (replace 'YourModel' and 'yourSchema' with your specific names)
const yourSchema = new mongoose.Schema({
  // Define your schema fields here
  // Example: name: String,
});

const YourModel = mongoose.model('YourModel', yourSchema);

// Create a route for creating a new item
app.post('/api/items', async (req, res) => {
  try {
    const newItem = await YourModel.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add routes for other CRUD operations (GET, PUT, DELETE) similarly

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected to MongoDB!");

    // Specify the database and collection
    const database = client.db("cluster0"); // Replace with your actual database name
    const collection = database.collection("users");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Call the run function
run().catch(console.dir);


const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

// Set up a basic route
app.get('/api', (req, res) => {
  res.send('Hello world');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

const uri = "mongodb+srv://karim:manchesterunited@cluster0.mu3bovl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Define a route to create a user
app.post('/api/users', async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db("cluster0"); // Replace with your actual database name
    const collection = database.collection("users");

    // Assuming req.body contains the user information
    const userDocument = req.body;

    const result = await collection.insertOne(userDocument);
    if (result.acknowledged) {
      console.log(`Inserted 1 document into the collection.`);
      res.status(201).json({ message: 'User created successfully' });
    } else {
      console.log(`Insertion was not acknowledged.`);
      res.status(500).json({ error: 'Internal server error' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

// Define a route to fetch all users
app.get('/api/users', async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db("cluster0"); // Replace with your actual database name
    const collection = database.collection("users");

    const users = await collection.find({}).toArray();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});





//My current code do not delete
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://karim:manchesterunited@cluster0.mu3bovl.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB URI
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}

connect();
const db = client.db('cluster0'); // Replace with your database name
const collection = db.collection('users'); // Replace with your collection name
const document = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
};

collection.insertOne(document, (error, result) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`Inserted document with ID: ${result.insertedId}`);
});
const documents = [
  { name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
  { name: 'Bob Smith', age: 35, email: 'bob.smith@example.com' },
];

collection.insertMany(documents, (error, result) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`Inserted ${result.insertedCount} documents`);
});
async function closeConnection() {
  try {
    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error(error);
  }
}

closeConnection();



const express = require('express');
const app = express();
app.use(express.json());

// Other configurations...

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://karim:manchesterunited@cluster0.mu3bovl.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB URI

const client = new MongoClient(uri);



app.post('/api/users', async (req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('cluster0'); // Replace with your actual database name
    const collection = database.collection('users'); // Replace with your actual collection name

    const userDocument = req.body; // Assuming req.body contains the user information

    const result = await collection.insertOne(userDocument);

    if (result.acknowledged) {
      console.log(`Inserted 1 document into the collection.`);
      res.status(201).json({ message: 'User created successfully' });
    } else {
      console.log(`Insertion was not acknowledged.`);
      res.status(500).json({ error: 'Internal server error' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});
const url = 'http://localhost:5000/api/users'; // Replace with your API endpoint
const data = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'hashed_password',
  birthdate: '1990-05-15',
  role: 'user'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

app.put('/api/users/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('cluster0'); // Replace with your actual database name
    const collection = database.collection('users'); // Replace with your actual collection name

    const filter = { _id: userId };
    const updateDoc = { $set: updatedUserData };

    const result = await collection.updateOne(filter, updateDoc);

    if (result.modifiedCount === 1) {
      console.log(`Updated 1 document.`);
      res.json({ message: 'User updated successfully' });
    } else {
      console.log(`Document not found or no changes made.`);
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});


















