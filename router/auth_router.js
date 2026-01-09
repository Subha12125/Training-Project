const express = require('express');
const router = express.Router();
// const {home} = require("../controllers/auth_controller");
// const {register} = require("../controllers/auth_controller");
const auth_controller = require("../controllers/auth_controller");

/*
router
    .route("/")
    .get((req, res) => {
        res.status(200).send("Welcome to the home page from auth router.");
}); */
//? Router for home page
router
    .route("/")
    .get(auth_controller.home);

/*
router
    .route("/register")
    .get((req, res) => {
        res.status(200).send("Welcome to the registration page from auth router.");
}); */
//? Router for register page
router
    .route("/register")
    .post(auth_controller.register);

//? Router for login page
router
    .route("/login")
    .post(auth_controller.login);

module.exports = router;