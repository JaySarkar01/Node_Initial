// Import the MongoClient from the 'mongodb' library
const { MongoClient } = require('mongodb');

// Connection URL for MongoDB (ensure MongoDB is running locally on port 27017)
const url = 'mongodb://localhost:27017';

// Initialize the MongoClient
const client = new MongoClient(url);

// Database and Collection Names
const database = 'items';
const collectionName = 'product';

async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);
    return db.collection(collectionName);
}

module.exports = dbConnect;