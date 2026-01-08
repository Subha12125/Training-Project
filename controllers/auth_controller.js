const User = require("../models/user_model");

const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("Welcome to the home page from auth controller.");
    }
    catch (error) {
        console.log(error);

    }
}
const register = async (req, res) => {
    try {
        const {username, email, phone, password} = req.body;
        const userExists = await User.findOne({email : email});
        if(userExists){
            return res.status(400).json({message : "Email is already registered..."});
        }
        else{
            User.create({username, email, phone, password});
            return res.status(200).json({message : "User registered...."})
        }
        
        res.status(200).json({message:req.body});
            // .send("Welcome to the register page from auth controller.");
            
    }
    catch (error) {
        console.log(error);

    }
}
module.exports = { home, register };