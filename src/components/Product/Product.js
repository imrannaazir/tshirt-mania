import React from 'react';

const Product = ({ product, handleCart, product: { gender, name, price, picture, id } }) => {
    // console.log(product);


    return (
        <div className='border rounded-md w-[300px] shadow-lg'>

            <img className='w-[280px] h-[280px] border m-auto mt-2 rounded-md' src={picture} alt="" />

            <div className='m-2 text-left'>
                <p className='text-2xl font-semibold'>{name}</p>
                <p>Price: ${price}</p>
                <p>Gender: {gender}</p>
            </div>
            <button onClick={() => handleCart(product)} className='bg-blue-400 w-[100%] border rounded-md p-1 font-semibold'>Add to Cart</button>

        </div>
    );
};

export default Product;