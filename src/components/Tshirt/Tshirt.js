import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    const { handleAddtoCartBtn, tshirt } = props;
    const { name, picture, price } = props.tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}$</p>
            <button onClick={() => handleAddtoCartBtn(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;