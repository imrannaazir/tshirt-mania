import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useProducts from '../../hooks/useProducts'
import Product from '../Product/Product';
const Home = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([])
    console.log(cart);
    const handleCart = selectedItem => {
        const newCart = [...cart, selectedItem]
        setCart(newCart)

    }
    const removedItem = item => {
        const restItems = cart.filter(products => products.id !== item.id)
        setCart(restItems);

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

                    {

                        cart.map(item => <Cart removedItem={removedItem} key={item.id} item={item} />
                        )
                    }



                </div>
            </div>
        </div>

    );
};

export default Home;