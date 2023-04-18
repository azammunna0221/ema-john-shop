import { getShoppingCart } from "../utilities/fakedb";

const loadProductFromLocal = async () =>{
    const product = await fetch("products.json")
    const loadProducts = await product.json()


    const storedCart = getShoppingCart();
    const storeProduct = [];

    for (const id in storedCart){
        const matchedProduct = loadProducts.find(pd =>pd.id === id )
        if(matchedProduct){
            const quantity = storedCart[id];
            matchedProduct.quantity =quantity;
            storeProduct.push(matchedProduct);
        }
    }

    return storeProduct;
}

export default loadProductFromLocal;
