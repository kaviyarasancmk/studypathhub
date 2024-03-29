const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection URI
const uri = 'mongodb://127.0.0.1:27017/studypathhub/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}
connectToMongoDB();

// API endpoint for user signup
app.post('/api/signup', async (req, res) => {
  const { email, password, name, phoneNumber } = req.body;
  console.log('Received signup request:', { email, name, phoneNumber }); // Log the request body for debugging

  try {
    const db = client.db('studypathhub');
    const usersCollection = db.collection('users');

    // Check if user with this email already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Insert new user into MongoDB
    const newUser = { name, email, password, phoneNumber };
    await usersCollection.insertOne(newUser);
    console.log('User signed up successfully:', newUser); // Log the newly created user for debugging
    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Signup error:', error); // Log any errors that occur during signup
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
