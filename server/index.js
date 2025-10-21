const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    userModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Login Successful");
                } else {
                    res.status(401).json({ error: "Invalid Credentials" }); //Sets error message and send status code 401 (Meaning: Invalid Request)
                }
            } else {
                res.status(400).json({ error: "User not registered" });
            }
        })
})

app.post('/register', (req, res) => {
    const { email } = req.body;

    userModel.findOne({ email: email }) //Searches the database for the email
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ error: 'Email already in use' });
            }

            userModel.create(req.body)  //After checking if email exists, creates new user in the database
                .then(newUser => res.status(201).json(newUser))  //Stores the data of new user in newUser variable
                .catch(err => res.status(500).json({ error: 'Error creating user', details: err })); //Catches any error that occurs while creating new user
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
})

app.listen(3001, () => {
    console.log("Server is running");
})