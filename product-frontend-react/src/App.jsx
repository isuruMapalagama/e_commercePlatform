import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartCount={cartCount}
        onSearchChange={handleSearchChange}
      />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <Home
              searchTerm={searchTerm}
              onAddToCart={handleAddToCart}
            />
          } />
          <Route path="/products" element={
            <Products
              searchTerm={searchTerm}
              onAddToCart={handleAddToCart}
            />
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


