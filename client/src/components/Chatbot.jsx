import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/ChatBot.css";
import "../pages/Pages.css"

function ChatBot() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [messagesForAPI, setMessagesForAPI] = useState([]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const userMessage = { role: "user", content: message };
        setChat(prev => [...prev, userMessage]);

        const updatedMessages = [...messagesForAPI, userMessage];
        setMessagesForAPI(updatedMessages);

        try {
            const res = await axios.post("http://localhost:3001/api/chat", {
                messages: updatedMessages
            });

            const assistantMessage = {
                role: "assistant",
                content: res.data.reply,
                reasoning_details: res.data.reasoning_details
            };

            setChat(prev => [...prev, assistantMessage]);
            setMessagesForAPI(prev => [...prev, assistantMessage]);

        } catch (err) {
            console.error(err);
            const errorMsg = { role: "assistant", content: "Error: could not get response." };
            setChat(prev => [...prev, errorMsg]);
        }

        setMessage("");
    };

    return (
        <div className="chatpage-container d-flex flex-column vh-100 bg-light p-3">
            <header className="text-center mb-4">
                <h1 className="display-5">AI Chat Assistant</h1>
                <p className="text-muted">Ask questions, get advice, or interact with your assistant.</p>
            </header>

            <div className="chatbot-box">
                <div className="chatbot-header">Chat Assistant</div>

                <div className="chat-messages">
                    {chat.map((msg, index) => (
                        <div
                            key={index}
                            className={`chat-message ${msg.role}`}
                        >
                            <div className={`chat-bubble ${msg.role}`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="chat-input-area">
                    <Link to="/" className="btn btn-custom w-25 rounded-3 m-2">
                        Home
                    </Link>
                    <input
                        type="text"
                        className="chat-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        onKeyDown={(e) => {
                            if (e.key === "Enter") sendMessage();
                        }}
                    />
                    <button
                        className="btn btn-custom w-25 rounded-3 m-2"
                        onClick={sendMessage}
                    >
                        Send
                    </button>

                </div>
            </div>

            <footer className="text-center mt-3 text-muted">
                &copy; {new Date().getFullYear()} Finance Made Simple
            </footer>
        </div>
    );
}

export default ChatBot;