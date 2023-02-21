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
                <Link to="/grandpa">Grandpa</Link>
                {/* <Link to='/father'>Father</Link>
                <Link to='/anty'>Anty</Link>
                <Link to='/child'>Child</Link>
                <Link to='/child1'>Child 1</Link>
                <Link to='/child2'>Child 2</Link> */}
            </nav>
        </div>
    );
};

export default Header;