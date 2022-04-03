import React from 'react';

const Product = ({ product, product: { gender, name, price, picture } }) => {
    console.log(product);

    return (
        <div className='border w-[300px]'>

            <img className='w-[280px] h-[280px] border m-auto mt-2 rounded-md' src={picture} alt="" />

            <div className='m-2 text-left'>
                <p className='text-2xl font-semibold'>{name}</p>
                <p>Price: ${price}</p>
                <p>Gender: {gender}</p>
            </div>
            <button className='bg-blue-400 w-[100%] border rounded-lg'>Add to Cart</button>

        </div>
    );
};

export default Product;