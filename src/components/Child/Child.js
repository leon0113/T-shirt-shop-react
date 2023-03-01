import React from 'react';
import Girlfriend from '../Girlfriend/Girlfriend';

const Child = ({ house, ornament }) => {
    return (
        <div>
            <h4>This is first child</h4>
            <p>House : {house}</p>
            <Girlfriend ornament={ornament}></Girlfriend>
        </div>
    );
};

export default Child;