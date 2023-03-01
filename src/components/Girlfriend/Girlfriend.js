import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Girlfriend = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>GirlFriend</h5>

            <p><small>Gift : {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Buy a house</button>
        </div>
    );
};

export default Girlfriend;