import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavMenu = () => {
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    console.log(cart.items.length);

    return (
        <nav style={{ padding: '10px', background: '#282c34', color: 'white' }}>
            <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 50px' }}>
                <li style={{ marginRight: '20px' }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                        Home
                    </Link>
                </li>
                <li style={{ marginRight: '20px' }}>
                    <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
                        <div style={{ position: 'relative' }}>
                            <i className="fa fa-shopping-cart" style={{ fontSize: '30px' }}></i>
                            {cart.items.length > 0 && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-5px',
                                        right: '-10px',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        borderRadius: '50%',
                                        padding: '3px 8px',
                                        fontSize: '12px',
                                    }}
                                >
                                    {cart.items.length}
                                </div>
                            )}
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
