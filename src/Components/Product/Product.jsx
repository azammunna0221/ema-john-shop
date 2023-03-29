import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.card;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='pro-info'>
            <h3>{name}</h3>
            <h4>Price:{price}$</h4>
            <p>Manufacturer:{seller}  <br /> Ratings:{ratings} </p>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;