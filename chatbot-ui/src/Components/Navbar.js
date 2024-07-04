import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Chatbot</a></li>
                <li><a href="/aws-server">AWS Server</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
