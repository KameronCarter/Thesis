const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',   // This links the budget to a user by creating a reference to the "User"
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    expenses: {
        type: Number,
        required: true,
    },
    spendingMoney: {
        type: Number,
        required: true,
    },
    savingsMoney: {
        type: Number,
        required: false,
    }
});

const budgetModel = mongoose.model("budgets", budgetSchema);

module.exports = budgetModel;
