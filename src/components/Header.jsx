import React from 'react';

const Header = () => {
    return (
        <header className="app-header">
            <div className="logo-section">
                <div className="logo-icon">✨</div>
                <h1 className="app-title">Global<span>Pulse</span></h1>
            </div>
            <nav className="nav-links">
                <a href="#" className="active">Home</a>
                <a href="#">Categories</a>
                <a href="#">About</a>
            </nav>
        </header>
    );
};

export default Header;