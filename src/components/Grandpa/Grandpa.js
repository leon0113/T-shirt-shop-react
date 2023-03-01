import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext('neckless');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';



    const handleBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }

    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h1>This is Grandpa component</h1>
                <p>House: {house} <button onClick={handleBuyAHouse}>Buy a house</button> </p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Anty house={house}></Anty>
                    <Uncle house={house}></Uncle>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;