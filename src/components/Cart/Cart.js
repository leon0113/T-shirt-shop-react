import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h2>Selected Items: {cart.length}</h2>
            {
                cart.map(item => <p>{item.name} <button className='xbtn'>X</button></p>)
            }
        </div>
    );
};

export default Cart;