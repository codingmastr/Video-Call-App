import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    const [value, setValue] = useState('');
    const navigateTo = useNavigate();
    
    const handleJoin = useCallback(() => {
        navigateTo(`/room/${value}`);
    });

    return (
        <div className="home-container">
            <div className="home-box">
                <h1>Join a Room</h1>
                <input 
                    value={value} 
                    type='text' 
                    placeholder='Enter Your Room ID'
                    onChange={(e) => setValue(e.target.value)} 
                    className="room-input"
                />
                <button onClick={handleJoin} className="join-button">Join</button>
            </div>
        </div>
    );
}

export default Home;
