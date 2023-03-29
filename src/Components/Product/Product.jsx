import React from 'react';
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const {img, name, price, seller, ratings} = props.card;
    const clickAddToCart = props.clickAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='pro-info'>
            <h3>{name}</h3>
            <h4>Price:{price}$</h4>
            <p>Manufacturer:{seller}  <br /> Ratings:{ratings} </p>
            </div>
            <button onClick={() => clickAddToCart(props.card)}>Add to Cart</button>
        </div>
    );
};

export default Product;