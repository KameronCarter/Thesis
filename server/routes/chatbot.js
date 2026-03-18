const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

// POST /chat
router.post("/chat", async (req, res) => {
    try {
        const { messages } = req.body; // Expecting an array of messages from frontend
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ reply: "Please provide messages in the request body." });
        }

        const API_KEY = process.env.OPENROUTER_API_KEY;
        if (!API_KEY) {
            return res.status(500).json({ reply: "Server API key not configured." });
        }

        // Make request to OpenRouter
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "nvidia/nemotron-3-nano-30b-a3b:free",
                messages: messages, // Messages from frontend, include preserved reasoning_details if needed
                reasoning: { enabled: true },
                //max_tokens: 150
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const assistantMessage = response.data.choices[0].message;

        // Send back assistant content and reasoning details
        res.json({
            reply: assistantMessage.content,
            reasoning_details: assistantMessage.reasoning_details || null
        });

    } catch (err) {
        console.error("Chatbot error:", err.response?.data || err.message);

        if (err.response?.status === 429) {
            res.status(429).json({ reply: "Rate limit exceeded, please try again later." });
        } else {
            res.status(500).json({ reply: "Server error. Try again later." });
        }
    }
});

module.exports = router;