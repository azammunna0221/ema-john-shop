import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        //Product quantity set to '1'
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping+ product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax ; 


    return (
        <div className='cart'>
            <h4>Shop Summery</h4> <hr />
            <p>Selected Items : {quantity}</p>
            <p>Total Price:${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping} </p>
            <p>tax :${tax.toFixed(2)} </p>
            <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;