import React from 'react';
import ProductsSection from '../components/ProductsSection.jsx';

export default function Products({ searchTerm, onAddToCart }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-4 sm:px-6 py-16 sm:py-24 before:absolute before:-top-36 before:-right-24 before:h-72 before:w-72 before:rounded-full before:bg-sky-200/40 before:blur-3xl before:content-[''] after:absolute after:-bottom-32 after:-left-20 after:h-80 after:w-80 after:rounded-full after:bg-indigo-200/40 after:blur-3xl after:content-['']">
      <header className="mx-auto mb-10 max-w-4xl rounded-3xl border border-white/60 bg-white/70 px-6 py-8 text-center shadow-xl shadow-sky-200/40 backdrop-blur-sm sm:px-12 sm:py-10 sm:text-left">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">All Products</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
          Browse our full catalog. Use the search bar in the header to filter.
        </p>
      </header>
      <ProductsSection searchTerm={searchTerm} onAddToCart={onAddToCart} />
    </section>
  );
}



