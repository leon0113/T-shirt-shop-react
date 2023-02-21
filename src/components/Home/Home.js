import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const [tshirts, setTshirts] = useTshirt();

    const [cart, setCart] = useState([]);
    // Add to cart button
    const handleAddtoCartBtn = (selectedItem) => {
        const exists = cart.find(tshirt => tshirt._id === selectedItem._id)
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('This item is already selected');
        }
    }
    // Delete from cart button
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        setCart(rest);
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
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;