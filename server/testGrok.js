const axios = require("axios");

async function testChat() {
    try {
        // Example conversation array
        const messages = [
            { role: "user", content: "Hello, bot! How are you today?" }
        ];

        // Send POST request to your chat route
        const res = await axios.post("http://localhost:3001/api/chat", {
            messages: messages
        });

        console.log("Assistant reply:", res.data.reply);
        console.log("Reasoning details (if any):", res.data.reasoning_details);

    } catch (err) {
        console.error("Error calling chat route:", err.response?.data || err.message);
    }
}

testChat();