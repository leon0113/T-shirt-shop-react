import React from 'react';
import Child from '../Child/Child';
import Child1 from '../Child1/Child';
import Child2 from '../Child2/Child2';

const Father = ({ house }) => {
    return (
        <div>
            <h2>This is Father component</h2>
            <p>House : {house}</p>
            <div style={{ display: 'flex' }}>
                <Child house={house}></Child>
                <Child1 house={house}></Child1>
                <Child2 house={house}></Child2>
            </div>
        </div>
    );
};

export default Father;