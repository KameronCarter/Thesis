const express = require("express");
const router = express.Router();
const Budget = require("../models/Budget");

// GET budgets for a specific user
router.get("/:userId", async (req, res) => {
    try {
        const budgets = await Budget.find({ userId: req.params.userId });
        res.json(budgets);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});
// DELETE a specific budget by ID
router.delete("/delete/:id", async (req, res) => {
    try {
        const budget = await Budget.findByIdAndDelete(req.params.id);

        if (!budget) {
            return res.status(404).json({ error: "Budget not found" });
        }

        res.json({ message: "Budget deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
