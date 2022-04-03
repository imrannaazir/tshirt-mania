import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useProducts from '../../hooks/useProducts'
import Product from '../Product/Product';
const Home = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([])
    console.log(cart);
    const handleCart = selectedItem => {
        const exists = cart.find(products => products.id === selectedItem.id)
        if (!exists) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else {
            alert('koida lage tor!!')
        }

    }
    const removedItem = item => {
        const restItems = cart.filter(products => products.id !== item.id)
        setCart(restItems);

    }
    let command;
    if (cart.length >= 4) {
        command = <div>
            <p>tumi 4 ta kinbe?</p>
        </div>
    }

    return (
        <div>


            <div className="grid grid-cols-8 lg:grid-cols-5 gap-2">


                <div className="lg:col-span-4 col-span-6 mt-8 ml-8 ">
                    <div className="products-container grid lg:grid-cols-3 sm:grid-cols-1 gap-8">

                        {
                            products.map(product => <Product key={product.id} product={product} handleCart={handleCart} />)
                        }
                    </div>
                </div>

                <div className="cart-container  lg:col-span-1 col-span-2 bg-fuchsia-400 fixed right-0 min-h-screen">
                    <p className='text-xl font-semibold'>Your Selected Products:</p>
                    {command}

                    {

                        cart.map(item => <Cart removedItem={removedItem} key={item.id} item={item} />
                        )
                    }
                    {cart.length === 0 ? <p>Sala fokir order kor!</p> : <p>aito valo cele</p>}
                    {cart.length === 3 && <p>3 ta ki korbi</p>}
                    {cart.length === 5 || <p>aro order kor!!</p>}



                </div>
            </div>
        </div>

    );
};

export default Home;