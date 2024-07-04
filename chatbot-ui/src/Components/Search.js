import React, { useState } from 'react';

function Search({ onSend, onApply }) {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    const handleApply = () => {
        onApply();
    }

    return (
        <div className="search">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={handleSend}>Send</button>
            <button id='btn-apply' onClick={handleApply}>Apply</button>
        </div>
    );
}

export default Search;