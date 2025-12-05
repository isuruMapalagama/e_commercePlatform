import React from 'react';

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v9h4v-9h3.64L19 9h-4V6a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <circle cx="17.5" cy="6.5" r="0.75" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
  { label: 'Support', href: 'mailto:support@aahaas.store' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-200">
                Aahaas
              </span>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Elevating the everyday with mindful design.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                We curate ethical makers, timeless silhouettes, and thoughtful experiences for a community that values
                craft as much as comfort. Join us as we reimagine what living beautifully feels like.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-slate-300">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 transition hover:border-white/40 hover:bg-white/15 hover:text-white"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white group-hover:bg-white/20">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-sky-500/20 backdrop-blur">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-200">Quick links</p>
              <p className="text-xs leading-relaxed text-slate-300">
                Navigate the essentials in one place—whether you want to learn about us, shop the latest drops, or get support.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs font-medium text-slate-200 sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                    <svg className="h-4 w-4 text-slate-300 transition group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aahaas Ecommerce. Crafted with care in San Francisco.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
