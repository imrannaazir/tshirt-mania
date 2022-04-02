import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <Link to='/home'>Home</Link>
            <Link to='/order'>Order</Link>
            <h1>Welcome to t-shirt mania!!!</h1>
        </div>
    );
};

export default Header;