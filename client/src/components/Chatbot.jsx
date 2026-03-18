import { useState } from "react";
import axios from "axios";

function ChatBot() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    // Keep a copy of messages to send to backend including reasoning
    const [messagesForAPI, setMessagesForAPI] = useState([]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        // 1️⃣ Add user message locally
        const userMessage = { role: "user", content: message };
        setChat(prev => [...prev, userMessage]);

        // 2️⃣ Add to messages to send to backend
        const updatedMessages = [...messagesForAPI, userMessage];
        setMessagesForAPI(updatedMessages);

        try {
            // 3️⃣ Call Express /chat route
            const res = await axios.post("http://localhost:3001/api/chat", {
                messages: updatedMessages
            });

            const assistantMessage = {
                role: "assistant",
                content: res.data.reply,
                reasoning_details: res.data.reasoning_details
            };

            // 4️⃣ Update chat and messagesForAPI to preserve reasoning
            setChat(prev => [...prev, assistantMessage]);
            setMessagesForAPI(prev => [...prev, assistantMessage]);

        } catch (err) {
            console.error(err);
            const errorMsg = { role: "assistant", content: "Error: could not get response." };
            setChat(prev => [...prev, errorMsg]);
        }

        // 5️⃣ Clear input
        setMessage("");
    };

    return (
        <div className="chatbot-box p-3 mb-3 border rounded">
            <h5>Chat Assistant</h5>

            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {chat.map((msg, index) => (
                    <div
                        key={index}
                        className={`mb-2 ${msg.role === "user" ? "text-end" : "text-start"}`}
                    >
                        <span className="badge bg-secondary">
                            {msg.content}
                        </span>
                    </div>
                ))}
            </div>

            <input
                type="text"
                className="form-control mb-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
            />

            <button className="btn btn-custom w-100" onClick={sendMessage}>
                Send
            </button>
        </div>
    );
}

export default ChatBot;