import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='bg-sky-200 p-6 flex justify-between sticky top-0'>
            <div className='text-xl font-sans font-bold text-gray-700'>
                <p><Link to='/'> T-Shirt Mania</Link></p>
            </div>
            <div className='flex gap-3 font-semibold text-gray-600'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/order'>Order</CustomLink>
                <CustomLink to='/grandpa'>Grandpa</CustomLink>
            </div>

        </div>
    );
};

export default Header;