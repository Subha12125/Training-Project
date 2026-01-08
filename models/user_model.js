const mongoose = require("mongoose");
const { pass } = require("three/tsl");

//? create a user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = new mongoose.model("User", userSchema);

module.exports = User;