const mongoose = require('mongoose');

const db = async () => {
    try {
        console.log('Attempting to connect to MongoDB with URL:', process.env.MONGO_URL);
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connected')
    } catch (error) {
        console.log('DB Conection error')
    }
}

module.exports = { db }