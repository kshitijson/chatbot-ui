import React, { useEffect, useRef } from 'react';

function ChatDisplay({ messages }) {
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat-display">
            {messages.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                    {msg.sender === 'user' ? (
                        <p>{msg.text}</p>
                    ): (
                        <pre>{msg.text}</pre>
                    )}
                </div>
            ))}
            <div ref={chatEndRef} />
        </div>
    );
}

export default ChatDisplay;
