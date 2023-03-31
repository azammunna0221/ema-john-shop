import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); //Add Selected Product Count
    //console.log(cart);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then( data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        let savedCart = [];
        //Step 1: get the ID
        for (const id in storedCart){
            //Step 2: Find Product from matched ID  
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                //step 3: get product quantity and set into product.json quantity.
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: adding retrieved Product & Its quantity to SavedCart[],
                savedCart.push(addedProduct);
            }
            console.log(savedCart);
        }
        // step 5: set data to state.
        setCart(savedCart);
    },[products])
    
    const clickAddToCart = (product)=>{
        const newCart = [...cart, product]; //Creating New array when "add btn" clicked.
        setCart(newCart);
        addToDb(product.id);
    }
    
    return (
        <div className='shop-body'> 
            <div className='all-product'>
                {
                   products.map(product => <Product
                   key={product.id}
                   product= {product}
                   clickAddToCart = {clickAddToCart}
                   ></Product> ) 
                }
            </div>
            <div className='shop-summery'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;