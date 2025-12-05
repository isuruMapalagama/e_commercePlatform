import React, { useState } from 'react';

const contactChannels = [
  {
    label: 'Email',
    value: 'support@aahaas.store',
    hint: 'We reply within 12 hours',
    href: 'mailto:support@aahaas.store',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 (555) 012-3456',
    hint: 'Mon–Fri, 9:00–17:00 PST',
    href: 'tel:+15550123456',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h2l3.6 7.59a1 1 0 00.9.59h6.72a1 1 0 00.96-.74L21 5M16 19a2 2 0 102 2 2 2 0 00-2-2zm-10 0a2 2 0 102 2 2 2 0 00-2-2z"
        />
      </svg>
    ),
  },
  {
    label: 'Studio',
    value: '123 Market Street, Suite 200, San Francisco, CA',
    hint: 'Book a private appointment',
    href: 'https://maps.google.com/?q=123+Market+Street,+San+Francisco,+CA',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11c0 5-7 10-7 10s-7-5-7-10a7 7 0 0114 0z" />
      </svg>
    ),
  },
];

const supportHighlights = [
  { value: '1–2 hrs', label: 'Average response time' },
  { value: '24/7', label: 'Concierge support' },
  { value: '4.9/5', label: 'Customer rating' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email required';
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 shadow-sm backdrop-blur">
              Let’s collaborate
            </span>
            <div className="space-y-4">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Say hello to the Aahaas team
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We champion thoughtful design and responsive service. Share your idea, project, or question and our
                concierge crew will craft a tailored reply within one business day.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg backdrop-blur"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-sky-100/70 transition group-hover:scale-125 group-hover:bg-sky-200/60" />
                  <div className="relative flex items-start gap-4 text-slate-700">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-sky-600 text-white shadow-lg shadow-sky-500/20">
                      {channel.icon}
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{channel.label}</p>
                      <p className="text-base font-semibold text-slate-900">{channel.value}</p>
                      <p className="text-sm text-slate-500">{channel.hint}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="grid gap-4 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-inner backdrop-blur sm:grid-cols-3">
              {supportHighlights.map((item) => (
                <div key={item.label} className="space-y-1 text-center sm:text-left">
                  <p className="text-2xl font-bold text-slate-900 sm:text-3xl">{item.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{item.label}</p>
                </div>
              ))}
              <div className="sm:col-span-3 mt-4 rounded-2xl bg-slate-900/95 px-5 py-4 text-sm text-slate-100 shadow-lg shadow-slate-900/30 sm:mt-0">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sky-500/80 text-white shadow">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13V6a2 2 0 00-2-2H8a2 2 0 00-2 2v7" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 19h12l2-6H4l2 6z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">Need an instant update?</p>
                    <p className="text-slate-300">Ping us in the app to track deliveries or tweak upcoming orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            {submitted ? (
              <div className="space-y-6 rounded-3xl border border-emerald-200/70 bg-emerald-50/90 p-8 shadow-lg shadow-emerald-200/30 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-400/30">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-emerald-800">Message received!</h2>
                    <p className="text-sm text-emerald-700">
                      Thanks, {form.name.split(' ')[0] || 'friend'} — one of our specialists will reach out shortly.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-emerald-700">
                  <p>In the meantime, keep an eye on your inbox (and spam folder) for a reply from the Aahaas crew.</p>
                  <p>Want to share more details? Feel free to send another message.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', message: '' });
                    setErrors({});
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/90 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-white"
                >
                  Submit another request
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-8 shadow-xl shadow-sky-200/40 backdrop-blur"
              >
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-28 -left-14 h-64 w-64 rounded-full bg-indigo-100/60 blur-3xl" aria-hidden="true" />
                <div className="relative space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-slate-900">Send us a note</h2>
                    <p className="text-sm text-slate-500">
                      Tell us a little about what you need. We’ll tailor our response to make sure you get the right help.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 6h14M5 18h7" />
                        </svg>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`mt-1 w-full rounded-xl border px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 focus:ring-offset-white ${
                          errors.name ? 'border-rose-300' : 'border-slate-200/70'
                        }`}
                        placeholder="Jane Doe"
                      />
                      {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12V6a4 4 0 10-8 0v6" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12l-1 8H7z" />
                        </svg>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`mt-1 w-full rounded-xl border px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 focus:ring-offset-white ${
                          errors.email ? 'border-rose-300' : 'border-slate-200/70'
                        }`}
                        placeholder="jane@example.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-9-9 9 9 0 019 9zm-6 4H9" />
                      </svg>
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      value={form.message}
                      onChange={handleChange}
                      className={`mt-1 w-full rounded-2xl border px-3.5 py-3 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 focus:ring-offset-white ${
                        errors.message ? 'border-rose-300' : 'border-slate-200/70'
                      }`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && <p className="text-xs text-rose-500">{errors.message}</p>}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      By submitting, you agree to receive an email from our concierge team within the next business day.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:bg-slate-800"
                    >
                      Send message
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}