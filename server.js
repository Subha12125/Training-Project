const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the home page");
});

//! create a port
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`The server is running at port ${PORT}`);    
});
