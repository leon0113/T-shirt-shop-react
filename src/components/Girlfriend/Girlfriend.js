import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Girlfriend = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h5>GirlFriend</h5>

            <p><small>{ring}</small></p>
        </div>
    );
};

export default Girlfriend;