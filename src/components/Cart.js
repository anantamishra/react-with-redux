
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h2>Cart</h2>
            {cart.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.items.map((item, index) => (
                        <p key={index}>{item.name} - ${item.price}</p>
                    ))}
                    <h3>Total: ${cart.total}</h3>
                    <button onClick={handleClearCart}>Clear Cart</button>

                </div>
            )}
        </div>
    );
};

export default Cart;
