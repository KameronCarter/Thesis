const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    securityWord: {
        type: String,
        required: true
    }
});



const userModel = mongoose.model("users", userSchema);   //Creates users table in database with userSchema

module.exports = userModel;