import React from 'react';
import { useDarkMode } from "./Hooks/useDarkMode";

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Woman's World Cup Players</h1>
            <div className="dark-mode__toggle">
                {/* eslint-disable-next-line jsx-a11y/aria-role */}
                <div role='toggleButton'
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default Navbar;