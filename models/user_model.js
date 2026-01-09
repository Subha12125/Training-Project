const mongoose = require("mongoose");
// const { pass } = require("three/tsl");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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
});

userSchema.pre("save" , async function () {
    const user = this;
    if(!user.isModified('password')){
        next();
    }
    try{
        const saltRound = 10;;
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch(error){
        next(error);
    }
});

userSchema.methods.generateToken = async function () {
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email
        },

        process.env.JWT_SECRET_KEY,
        {
            expiresIn : "1d"
        }
    )
    }catch(error){
        console.log(error);
    }
}



const User = new mongoose.model("User", userSchema);

module.exports = User;