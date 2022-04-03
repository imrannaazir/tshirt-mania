import React from 'react';

const Cart = ({ item, removedItem, item: { name, picture } }) => {
    return (
        <div className='flex justify-between pl-3 pt-2 pr-3 bg-slate-50 mb-2 rounded-lg'>
            <div className='flex gap-2'>
                <img className='w-[25px] h-[25px] rounded-full' src={picture} alt="" />
                <p>{name}</p>
            </div>
            <button onClick={() => removedItem(item)} className=' text-red-600 bg-blue-400 pl-2 pr-2 rounded-full'>X</button>

        </div>
    );
};

export default Cart;