import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const [tshirts, setTshirts] = useTshirt();

    const [cart, setCart] = useState([]);
    const handleAddtoCartBtn = (selectedItem) => {
        const newCart = [...cart, selectedItem];
        setCart(newCart);
    }


    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddtoCartBtn={handleAddtoCartBtn}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;