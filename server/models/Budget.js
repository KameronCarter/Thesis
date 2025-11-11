const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    category: String,
    totalAmount: Number,
    createdAt: { type: Date, default: Date.now }
});

const budgetModel = mongoose.model("budgets", budgetSchema);

module.exports = budgetModel;
