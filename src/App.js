// src/App.js
import React from 'react';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <h1>Simple React-Redux Store</h1>
      <Products />
      ----------------------------------------------------------------
      <Cart />
    </div>
  );
}

export default App;
