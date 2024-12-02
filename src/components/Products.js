import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 2000 },
];

const Products = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Products;