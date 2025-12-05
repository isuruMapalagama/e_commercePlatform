import React, { useEffect, useMemo, useState } from 'react';
import { fetchProducts } from '../utils/api';
import Spinner from './Spinner';
import ProductCard from './ProductCard';

export default function ProductsSection({ searchTerm, onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError('');
      try {
        const data = await fetchProducts();
        if (!cancelled) setProducts(data);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load products.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    if (!searchTerm) return products;
    const q = searchTerm.toLowerCase();
    return products.filter((p) =>
      p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }, [products, searchTerm]);

  return (
    <section className="relative mx-auto max-w-7xl px-0 sm:px-2 lg:px-4">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/70 px-4 py-4 shadow-inner backdrop-blur-sm sm:px-6">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Products</h2>
        <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-600 shadow-sm">
          {filtered.length} items
        </p>
      </div>

      {loading && <Spinner />}

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200/70 bg-red-50/80 px-4 py-4 text-red-700 shadow-inner">
          {error}
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-white/70 px-6 py-8 text-center text-slate-500 backdrop-blur-sm">
          No products match your search.
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}



