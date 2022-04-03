import React from 'react';
import Myself from '../MySelf/MySelf'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
const Father = ({ property, ornament }) => {
    return (
        <div className=' p-6 border border-red-500'>
            <h1 >Father</h1>
            <p className=' text-sm'>Property: {property}</p>
            <div className='flex gap-6'>

                <Myself ornament={ornament} property={property} />
                <Brother />
                <Sister />
            </div>
        </div>
    );
};

export default Father;