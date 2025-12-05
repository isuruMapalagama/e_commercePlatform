import React from 'react';

function formatCurrency(value) {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  } catch {
    return `$${Number(value).toFixed(2)}`;
  }
}

export default function ProductCard({ product, onAddToCart }) {
  const { name, description, price, image_url } = product;
  const shortDesc = description.length > 90 ? `${description.slice(0, 90)}…` : description;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-lg shadow-sky-200/30 backdrop-blur-sm transition transform hover:-translate-y-1 hover:shadow-2xl before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-br before:from-sky-200/40 before:via-transparent before:to-indigo-200/40 before:opacity-0 before:transition before:duration-500 group-hover:before:opacity-100">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50">
        <img
          src={image_url}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:rotate-[1deg]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-sm leading-relaxed text-slate-500">{shortDesc}</p>
        <div className="flex items-center justify-between gap-3 pt-1">
          <span className="text-xl font-bold text-slate-900">{formatCurrency(price)}</span>
          <button
            onClick={onAddToCart}
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1 focus:ring-offset-white"
          >
            Add to Cart
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/90">
              <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 10h2m2 0h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}



