const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    totalAmount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',   // This links the budget to a user
        required: true
    }
});

const budgetModel = mongoose.model("budgets", budgetSchema);

module.exports = budgetModel;
