import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); //Add Selected Product Count

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then( data => setProducts(data))
    },[])
    
    const clickAddToCart = (product)=>{
        const newCart = [...cart, product]; //Creating New array when "add btn" clicked.
        setCart(newCart);
    }
    
    return (
        <div className='shop-body'> 
            <div className='all-product'>
                {
                   products.map(product => <Product
                   key={product.id}
                   card= {product}
                   clickAddToCart = {clickAddToCart}
                   ></Product> ) 
                }
            </div>
            <div className='shop-summery'>
                <h4>Shop Summery</h4> <hr />
                <p>Added Items : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;