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

module.exports = router;
