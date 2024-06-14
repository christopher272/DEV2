import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div>
            <Navbar />
        <div className="heading">
            <h1>Clean Blog</h1>
            <p>A Blog Theme by Start Bootstrap</p>
        </div>
        </div>
    );
}

export default Header;