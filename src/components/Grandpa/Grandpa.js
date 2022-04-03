import React, { createContext } from 'react';
import Father from '../Father.js/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
export const RingContext = createContext('diamond')

const Grandpa = () => {
    const property = '$82 million'
    const ornament = 'dimond ring'
    return (
        <RingContext.Provider value={ornament}>
            <div className=' border border-red-600 p-6 mt-4'>
                <p>Grandpa</p>
                <p>Property: {property}</p>
                <div className='text-4xl flex gap-6' >
                    <Father property={property} ornament={ornament} />
                    <Uncle />
                    <Aunty />
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;