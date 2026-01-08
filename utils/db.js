const mongoose = require("mongoose");
//? connect to the database
const MONGOOSE_URI = "mongodb://localhost:27017/";


const connectDB = async () => {
    try{
        await mongoose.connect((MONGOOSE_URI));
        console.log("MongoDB connected successfully");
    }catch{
        console.log("MongoDB connection failed");
        process.exit(0);
    }
}