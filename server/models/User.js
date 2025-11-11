const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const userModel = mongoose.model("users", userSchema);   //Creates users table in database with userSchema

module.exports = userModel;