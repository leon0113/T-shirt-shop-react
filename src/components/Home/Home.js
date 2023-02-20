import React from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const [tshirts, setTshirts] = useTshirt();

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                <h3>{tshirts.length}</h3>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;