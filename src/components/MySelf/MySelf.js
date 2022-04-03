import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ property, ornament }) => {
    return (
        <div className='border border-2 border-red-400 p-9'>
            <h1>Me

            </h1>
            <p className=' text-sm'>Property: {property}</p>
            <div className='border border-2 border-red-400 p-9'>
                <Special ornament={ornament} /></div>
        </div>
    );
};

export default MySelf;