import React from 'react';
import Cart from '../Cart/Cart';
import useProducts from '../../hooks/useProducts'
import Product from '../Product/Product';
const Home = () => {
    const [products, setProducts] = useProducts();

    return (
        <div>


            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">


                <div className="lg:col-span-4  border-2 ">hello
                    <div className="products-container grid lg:grid-cols-3 sm:grid-cols-1">

                        {
                            products.map(product => <Product key={product.id} product={product} />)
                        }
                    </div>
                </div>

                <div className="cart-container  lg:col-span-1 bg-fuchsia-400">

                    <p>cart</p>



                </div>
            </div>
        </div>

    );
};

export default Home;