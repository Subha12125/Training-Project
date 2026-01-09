const User = require("../models/user_model");
const bcrypt = require("bcryptjs");


//? home
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

//! register
const register = async (req, res) => {
    try {
        const {username, email, phone, password} = req.body;
        const userExists = await User.findOne({email : email});
        if(userExists){
            return res.status(400).json({message : "Email is already registered..."});
        }
        else{
            // const saltRound = 10;
            // const hash_password = await bcrypt.hash(password, saltRound);
            const userData = await User.create({username, email, phone, password});
            
            // User.create({username, email, phone, password});
            // return res.status(200).json({message : "User registered...."})
            return res.status(200).json({
                msg : "user registered....",
                token : await userData.generateToken()
            });
        }
        
        res.status(200).json({message:req.body});
            // .send("Welcome to the register page from auth controller.");
            
    }
    catch (error) {
        console.log(error);

    }
}

//! Login 
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        //Validate input
        if (!username || !password) {
            return res.status(400).json({ message: "Provide all details...." });
        }

        //Check user exists
        const userExists = await User.findOne({ username });
        if (!userExists) {
            return res.status(400).json({ message: "Invalid credentials...." });
        }

        //Compare password
        const isMatch = await bcrypt.compare(password, userExists.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials....." });
        }

        // Success response
        return res.status(200).json({
            message: "Login successful",
            token: await userExists.generateToken()
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { home, register, login };
