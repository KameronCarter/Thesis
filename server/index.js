const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/User');
const budgetModel = require('./models/Budget');
const budgetRoutes = require("./routes/budgets");

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
                    res.json({
                        message: "Login Successful",
                        user: {
                            _id: user._id,
                            email: user.email,
                            name: user.name
                        }
                    });
                } else {
                    res.status(401).json({ error: "Invalid Credentials" }); //Sets error message and send status code 401 (Meaning: Invalid Request)
                }
            } else {
                res.status(400).json({ error: "User not registered" });
            }
        })
});

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

app.post('/profile', async (req, res) => {
    try {
        const { totalAmount, category, email, expenses } = req.body;

        if (!totalAmount || !category || !email || !expenses) {
            return res.status(400).json({ error: "Total amount, category, email, and expenses are required." });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        await budgetModel.create({
            totalAmount,
            category,
            expenses,
            userId: user._id
        });

        res.status(201).json("Budget Created Successfully");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error creating budget", details: err.message });
    }
});

app.use("/budgets", budgetRoutes);



app.listen(3001, () => {
    console.log("Server is running");
})