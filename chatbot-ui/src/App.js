import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Components/Search';
import ChatDisplay from './Components/ChatDisplay';
import './App.css';
import Navbar from './Components/Navbar';
import AwsServer from './Components/AwsServer';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: text }),
        credentials: 'include',
      });

      const data = await response.json();
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: data.reply,
        timestamp: new Date().toISOString(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleApply = async () => {
    /////////////////////////////////////////////////////////////
    // for fetch api requests when clicked on the Apply Button //
    /////////////////////////////////////////////////////////////
    console.log(messages[messages.length-1].text)
  }

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/aws-server" element={<AwsServer />} />
          <Route
            path="/"
            element={
              <div className="chat-container">
                <ChatDisplay messages={messages} />
                <Search onSend={handleSend} onApply={handleApply} />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
