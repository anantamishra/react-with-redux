// src/components/Products.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import { toast } from 'react-toastify'; // Import toast from react-toastify

const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Product 3', price: 150, image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'Product 4', price: 250, image: 'https://via.placeholder.com/200' },
];

const Products = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        // Show a toast notification when a product is added to the cart
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="products-container">
            <h2>Our Products</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p className="product-price">${product.price}</p>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
