const express = require('express');
const router = express.Router();


router
    .route("/")
    .get((req, res) => {
        res.status(200).send("Welcome to the home page from auth router.");
});


router
    .route("/register")
    .get((req, res) => {
        res.status(200).send("Welcome to the registration page from auth router.");
});

module.exports = router;