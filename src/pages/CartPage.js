// src/components/CartPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart, updateQuantity } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    // Handle removing an item
    const handleRemove = (productId) => {
        dispatch(removeItem(productId));
        toast.info('Item removed from cart');
    };

    // Handle clearing the cart
    const handleClearCart = () => {
        dispatch(clearCart());
        toast.info('Cart cleared');
    };

    // Handle updating quantity
    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity <= 0) return; // Prevent going below 1
        dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
        toast.info(`Quantity updated to ${newQuantity}`);
    };

    // Calculate the total price
    const totalPrice = cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.items.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty!</p>
                    <Link to="/" className="continue-shopping-btn">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.items.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-info">
                                    <h4>{item.name}</h4>
                                    <p>${item.price}</p>

                                    <div className="cart-item-quantity">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            className="quantity-btn"
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            className="quantity-btn"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p>Total: ${item.price * item.quantity}</p>
                                    <button
                                        className="remove-item-btn"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Cart Total</h3>
                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                        <button className="clear-cart-btn" onClick={handleClearCart}>
                            Clear Cart
                        </button>
                        <Link to="/checkout" className="checkout-btn">
                            Checkout
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
