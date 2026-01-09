require("dotenv").config(); 

const express = require('express');
const router = require('./router/auth_router');
const connectDB = require('./utils/db');

const app = express();

//? create a route
/*
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the home page.");
});
*/

//* add json
app.use(express.json()); 

app.use("/api/auth", router);

//? registration page route
/*
app.get('/register', (req, res) => {
    res.status(200).send("Welcome to the registration page");
});*/


//! create a port
// const PORT = 5000;
/*
app.listen(PORT, ()=>{
    console.log(`The server is running at port ${PORT}`);    
}); */

//* connect db
connectDB()
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
        console.log(`The server is running at port ${process.env.PORT}`);    
    });
});

