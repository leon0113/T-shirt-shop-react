import React from 'react';
import './Cart.css'

const Cart = ({ handleRemoveFromCart, cart }) => {
    //Conditional rendering options
    // 1. Element Variable
    //2 ternary operator 
    //3.&& operator
    // ||

    let command;
    if (cart.length === 0) {
        command = <p>Please add some items.</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p><small className='text'>Thanks for adding itmes.</small></p>
    }
    return (
        <div className='cart'>
            <h2>Selected Items: {cart.length}</h2>

            {
                cart.map(item => <p>{item.name} <button className='xbtn' onClick={() => handleRemoveFromCart(item)}>X</button></p>)
            }

            {/* Conditional rendering applied */}
            {cart.length === 0 || <p className='h3'>Thank you for buying</p>}
            {cart.length === 3 && <h3 className='h3'>Three items selected</h3>}
            {command}
            {cart.length < 4 ? <p>Keep adding</p> : <button>Remove all</button>}
            {cart.length === 5 && <button className='h3'>Review all</button>}
        </div>
    );
};

export default Cart;