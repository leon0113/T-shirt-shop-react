import React, { useState } from 'react';
import './Grandpa.css'
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const handleBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }

    return (
        <div className='grandpa'>
            <h1>This is Grandpa component</h1>
            <p>House: {house} <button onClick={handleBuyAHouse}>Buy a house</button> </p>
            <section style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Anty house={house}></Anty>
                <Uncle house={house}></Uncle>
            </section>
        </div>
    );
};

export default Grandpa;