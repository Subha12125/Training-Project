const mongoose = require("mongoose");
//? connect to the database
// const MONGODB_URI = "mongodb://localhost:27017/";
const MONGODB_URI = process.env.MONGODB_URI;


const connectDB = async () => {
    try{
        await mongoose.connect((MONGODB_URI));
        console.log("MongoDB connected successfully");
    }catch{
        console.log("MongoDB connection failed");
        process.exit(0);
    }
}

module.exports = connectDB;