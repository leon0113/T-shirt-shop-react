import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to Tshirt shop</h2>
            <nav className='nav'>
                <Link to="/home">Home</Link>
                <Link to="/orderReview">Order Review</Link>
            </nav>
        </div>
    );
};

export default Header;