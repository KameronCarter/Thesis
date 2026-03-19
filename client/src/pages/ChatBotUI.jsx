import ChatBot from "../components/Chatbot.jsx"; // adjust path if needed

function ChatPage() {
    return (
        <div className="chatpage-container d-flex flex-column vh-100 bg-light p-3">
            <header className="text-center mb-4">
                <h1 className="display-5">AI Chat Assistant</h1>
                <p className="text-muted">Ask questions, get advice, or interact with your assistant.</p>
            </header>

            <main className="flex-grow-1 d-flex justify-content-center align-items-center">
                <div style={{ width: "100%", maxWidth: "600px" }}>
                    <ChatBot />
                </div>
            </main>

            <footer className="text-center mt-3 text-muted">
                &copy; {new Date().getFullYear()} Your App Name
            </footer>
        </div>
    );
}

export default ChatPage;