import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='shop-body'>
            <div className='all-products'>
                order summery: {products.length}
            </div>
            <div className='shop-summery'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Order;