import React from 'react';
import Girlfriend from '../Girlfriend/Girlfriend';

const Child = ({ house }) => {
    return (
        <div>
            <h4>This is child component</h4>
            <p>House : {house}</p>
            <Girlfriend></Girlfriend>
        </div>
    );
};

export default Child;