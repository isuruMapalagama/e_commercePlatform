import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({ cartCount, onSearchChange }) {
  return (
    <header className="sticky top-0 z-30 overflow-hidden border-b border-white/40 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-sky-50 opacity-90" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" aria-hidden="true" />
      <div className="relative">
        <div className="hidden px-4 py-2 text-xs font-medium text-sky-900/80 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2.5 py-1 text-[11px] uppercase tracking-wide text-sky-700">
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2.166 12.58a1 1 0 01.214-1.4l5.905-4.428a1 1 0 011.197 0l5.905 4.428a1 1 0 01.214 1.4l-5.905 8.976a1 1 0 01-1.63 0l-5.905-8.976z" />
              </svg>
              Spotlight
            </span>
            <span>Free express delivery on all orders over $75 this week only.</span>
          </div>
          <div className="flex items-center gap-4 text-sky-600">
            <NavLink to="/products" className="hover:text-sky-800 transition">
              Explore drops
            </NavLink>
            <a href="mailto:support@aahaas.com" className="hidden md:inline hover:text-sky-800 transition">
              support@aahaas.com
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-sky-200 px-3 py-1 text-[11px] uppercase tracking-wide text-sky-700 shadow-sm transition hover:border-sky-300 hover:text-sky-900"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              Track order
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 py-4">
            <div className="flex flex-1 items-center gap-6">
              <NavLink to="/" className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 via-sky-400 to-indigo-500 text-white shadow-lg shadow-sky-500/30">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 11h4v10H5zM10 7h4v14h-4zM15 3h4v18h-4z" />
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight text-gray-900">Aahaas</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-500">
                    Elevated living
                  </span>
                </span>
              </NavLink>

              <nav className="hidden flex-1 items-center justify-center gap-2 rounded-full border border-sky-100 bg-white/70 px-2 py-1 text-sm font-semibold text-slate-500 shadow-inner backdrop-blur md:flex">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 transition ${isActive ? 'bg-sky-100 text-sky-700 shadow-sm' : 'hover:text-slate-900'}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `group relative rounded-full px-3 py-2 transition ${isActive ? 'bg-sky-100 text-sky-700 shadow-sm' : 'hover:text-slate-900'}`
                  }
                >
                  Products
                  {/* <span className="ml-2 inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-amber-600">
                    New
                  </span> */}
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 transition ${isActive ? 'bg-sky-100 text-sky-700 shadow-sm' : 'hover:text-slate-900'}`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 transition ${isActive ? 'bg-sky-100 text-sky-700 shadow-sm' : 'hover:text-slate-900'}`
                  }
                >
                  Contact
                </NavLink>
                {/* <NavLink
                  to="/products?view=editorial"
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 transition ${isActive ? 'bg-sky-100 text-sky-700 shadow-sm' : 'hover:text-slate-900'}`
                  }
                >
                  Editorial
                </NavLink> */}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-3 py-1.5 text-sm shadow-inner backdrop-blur">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 17h6" />
                  </svg>
                  All
                </span>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for design-led finds..."
                    className="w-60 rounded-md border-0 bg-transparent pl-2 pr-9 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                  <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4.5 w-4.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white/70 p-2 text-sky-600 shadow-sm transition hover:border-sky-300 hover:text-sky-800 md:hidden"
                aria-label="Search"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              <div className="relative">
                <button
                  className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-2 text-sm font-semibold text-sky-600 shadow-sm transition hover:border-sky-300 hover:text-sky-800"
                  aria-label="Cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="hidden text-xs font-semibold uppercase tracking-wide md:inline">Cart</span>
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-sky-600 px-1.5 text-[10px] font-semibold text-white shadow-sm">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}