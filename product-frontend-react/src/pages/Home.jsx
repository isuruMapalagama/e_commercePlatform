import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner.jsx';
import ProductsSection from '../components/ProductsSection.jsx';

export default function Home({ searchTerm, onAddToCart }) {
  const navigate = useNavigate();

  const goToProducts = () => navigate('/products');

  return (
    <>
      <Banner onShopNow={goToProducts} />
      <div id="products">
        <ProductsSection searchTerm={searchTerm} onAddToCart={onAddToCart} />
      </div>
    </>
  );
}



