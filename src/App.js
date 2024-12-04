// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import CartPage from './pages/CartPage';
import NavMenu from './components/NavMenu';
import './App.css'

function App() {
  return (
    <Router>
      <NavMenu />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
