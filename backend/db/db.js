// Import the mongoose library for MongoDB connection
const mongoose = require('mongoose');

// Define an asynchronous function to connect to the MongoDB database
const db = async () => {
    try {
        console.log('Attempting to connect to MongoDB with URL:', process.env.MONGO_URL);
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connected')
    } catch (error) {
        console.log('DB Connection error')
    }
}

// Export the db function as a module
module.exports = { db }