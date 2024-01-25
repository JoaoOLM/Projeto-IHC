import React, { useState, useEffect } from 'react';
import './Header.css';
import Sidebar from '../sidebar/SideBar';
import AccessibilityButton from '../accessibility/Accessibility';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='header'>
            <div className='header-items'>
                <Sidebar />
                <div className='current-time'>
                    <p>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <AccessibilityButton />
            </div>
        </div>
    );
}

export default Header;
