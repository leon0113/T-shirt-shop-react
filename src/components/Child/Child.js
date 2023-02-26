import React from 'react';
import Girlfriend from '../Girlfriend/Girlfriend';

const Child = ({ house, ornament }) => {
    return (
        <div>
            <h4>This is child component</h4>
            <p>House : {house}</p>
            <Girlfriend ornament={ornament}></Girlfriend>
        </div>
    );
};

export default Child;