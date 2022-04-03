import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h1>Special</h1>
            <p className=' text-sm'>Gift:{ring} </p>
        </div>
    );
};

export default Special;