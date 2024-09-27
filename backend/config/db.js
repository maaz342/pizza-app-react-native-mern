const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI;

    try {
        const conn = await mongoose.connect("mongodb+srv://maaz:mik%40ilo52@movie.zh3bs.mongodb.net/pizzaApp");
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

