import React from 'react';
import Cart from '../Cart/Cart';

const Order = () => {
    return (
        <div className='shop-body'>
            <div className='all-products'>
                order summery
            </div>
            <div className='shop-summery'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Order;