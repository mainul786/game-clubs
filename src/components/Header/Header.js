import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <a href="#home">Home</a>
                <a href="#Shop">Shop</a>
                <a href="#inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default Header;