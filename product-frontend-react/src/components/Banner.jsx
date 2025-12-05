import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../../videot.mp4';

export default function Banner({ onShopNow }) {
  return (
    <section className="relative isolate overflow-hidden bg-sky-50">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10  backdrop-blur-sm" />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 -z-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.104 3.396a1 1 0 00.95.69h3.577c.969 0 1.371 1.24.588 1.81l-2.893 2.102a1 1 0 00-.364 1.118l1.104 3.396c.3.921-.755 1.688-1.539 1.118l-2.893-2.102a1 1 0 00-1.176 0l-2.893 2.102c-.784.57-1.838-.197-1.539-1.118l1.105-3.396a1 1 0 00-.364-1.118l-2.894-2.102c-.782-.57-.38-1.81.59-1.81h3.576a1 1 0 00.951-.69l1.104-3.396z" />
              </svg>
              New arrivals every week
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-tight">
              Discover the next wave of everyday essentials.
            </h1>
            <p className="text-base leading-relaxed text-blue-500 sm:text-lg">
              Curated drops from independent designers and beloved brands. Shop smart finds, elevated basics, and future favorites handpicked by our experts.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* <button
                type="button"
                onClick={onShopNow}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white"
              >
                Shop Now
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button> */}
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-sky-200 bg-white/70 px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur transition hover:border-sky-300 hover:text-sky-800"
              >
                Browse Collections
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" />
                </svg>
              </Link>
            </div>
            <dl className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-3 sm:gap-6">
              <div className="space-y-1 rounded-xl bg-white/70 p-4 shadow-sm backdrop-blur">
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">Happy customers</dt>
                <dd className="text-2xl font-semibold text-gray-900">50k+</dd>
              </div>
              <div className="space-y-1 rounded-xl bg-white/70 p-4 shadow-sm backdrop-blur">
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">Curated brands</dt>
                <dd className="text-2xl font-semibold text-gray-900">320+</dd>
              </div>
              <div className="space-y-1 rounded-xl bg-white/70 p-4 shadow-sm backdrop-blur">
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">Concierge support</dt>
                <dd className="text-2xl font-semibold text-gray-900">24/7</dd>
              </div>
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div
              className="absolute -top-14 -right-10 h-32 w-32 rounded-full bg-sky-300/40 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-16 -left-8 h-36 w-36 rounded-full bg-indigo-200/40 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-3xl bg-white/80 shadow-xl ring-1 ring-white/60 backdrop-blur">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-[url('https://source.unsplash.com/featured/200x200?minimal-product&sig=12')] bg-cover bg-center shadow-inner" />
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.166 12.58a1 1 0 01.214-1.4l5.905-4.428a1 1 0 011.197 0l5.905 4.428a1 1 0 01.214 1.4l-5.905 8.976a1 1 0 01-1.63 0l-5.905-8.976z" />
                      </svg>
                      Featured drop
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">Nordic Desk Lamp</h3>
                    <p className="text-sm text-gray-500">Soft ambient glow with sculpted aluminum finishing.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">$129</span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-500">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.104 3.396a1 1 0 00.95.69h3.577c.969 0 1.371 1.24.588 1.81l-2.893 2.102a1 1 0 00-.364 1.118l1.104 3.396c.3.921-.755 1.688-1.539 1.118l-2.893-2.102a1 1 0 00-1.176 0l-2.893 2.102c-.784.57-1.838-.197-1.539-1.118l1.105-3.396a1 1 0 00-.364-1.118l-2.894-2.102c-.782-.57-.38-1.81.59-1.81h3.576a1 1 0 00.951-.69l1.104-3.396z" />
                        </svg>
                        4.8
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 rounded-2xl bg-slate-50/80 p-4 text-sm text-gray-600 shadow-inner">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
                      <svg className="h-5 w-5 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 10V6a5 5 0 0110 0v4m-9 8a2 2 0 104 0m-8 0a2 2 0 104 0" />
                      </svg>
                    </div>
                    <span>Free next-day delivery on premium range.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
                      <svg className="h-5 w-5 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Try at home for 30 days with easy returns.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 right-6 w-40 origin-bottom rotate-3 rounded-2xl bg-white/70 p-4 text-sm font-semibold text-gray-700 shadow-lg ring-1 ring-white/70 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 shadow-sm">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10m-6 5h6" />
                  </svg>
                </div>
                <span>1-click reorders now live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}