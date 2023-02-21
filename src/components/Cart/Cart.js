import React from 'react';
import './Cart.css'

const Cart = ({ handleRemoveFromCart, cart }) => {
    //Conditional rendering options
    // 1. Element Variable
    let command;
    if (cart.length === 0) {
        command = <p>Please add some items.</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p>Thanks for adding itmes.</p>
    }
    return (
        <div className='cart'>
            <h2>Selected Items: {cart.length}</h2>
            {command}
            {
                cart.map(item => <p>{item.name} <button className='xbtn' onClick={() => handleRemoveFromCart(item)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;