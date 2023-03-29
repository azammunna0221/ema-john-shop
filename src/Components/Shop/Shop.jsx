import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then( data => setProducts(data))
    },[])

    return (
        <div className='shop-body'> 
            <div className='all-product'>
                {
                   products.map(product => <Product
                   key={products.id}
                   card = {product}
                   ></Product> ) 
                }
            </div>
            <div className='shop-summery'>
                Shop Summery
            </div>
        </div>
    );
};

export default Shop;