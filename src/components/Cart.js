
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector((state) => state.cart);

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
                </div>
            )}
        </div>
    );
};

export default Cart;
