import React from 'react';

const milestones = [
  {
    year: '2019',
    title: 'Origin Story',
    description:
      'Aahaas launched as a two-person pop-up, curating under-the-radar makers for a handful of design-obsessed friends.',
  },
  {
    year: '2021',
    title: 'Community First',
    description:
      'Introduced our membership program, partnered with 120 independent labels, and opened the first sensory showroom.',
  },
  {
    year: '2024',
    title: 'Global Canvas',
    description:
      'Scaled to a worldwide audience while doubling down on conscious sourcing, inclusive sizing, and carbon-neutral logistics.',
  },
];

const values = [
  {
    title: 'Craft With Purpose',
    description:
      'Every product is vetted for timeless design, premium materials, and ethical production—no compromises.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: 'Celebrate Diversity',
    description:
      'We collaborate with creators across cultures to champion perspectives that reflect the world we live in.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
  },
  {
    title: 'Design For Impact',
    description:
      'From biodegradable packaging to carbon-neutral shipping, we invest in practices that leave a lighter footprint.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10a8 8 0 10-16 0c0 6 8 10 8 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a3 3 0 10-3-3 3 3 0 003 3z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: 'Kasuni D.',
    title: 'Founder & Curator-in-Chief',
    bio: 'Leads brand strategy and sourcing, scouting emerging designers who balance artistry with sustainability.',
    headshot:
      "bg-[url('https://source.unsplash.com/featured/300x300?portrait,creative&sig=21')]",
  },
  {
    name: 'Leo M.',
    title: 'Experience Architect',
    bio: 'Designs immersive retail moments across digital and physical spaces, always focused on customer delight.',
    headshot:
      "bg-[url('https://source.unsplash.com/featured/300x300?portrait,design&sig=14')]",
  },
  {
    name: 'Mira S.',
    title: 'Sustainability Lead',
    bio: 'Partners with suppliers to unlock traceable materials, regenerative production, and zero-waste packaging.',
    headshot:
      "bg-[url('https://source.unsplash.com/featured/300x300?portrait,sustainability&sig=17')]",
  },
];

const stats = [
  { label: 'Independent makers represented', value: '320+' },
  { label: 'Orders shipped with carbon-neutral partners', value: '98%' },
  { label: 'Community events hosted annually', value: '45' },
  { label: 'Customer satisfaction score', value: '4.9/5' },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-600 shadow-sm backdrop-blur">
              Who we are
            </span>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
              Reimagining everyday living through intentional design
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Aahaas is a collective of dreamers, detail-lovers, and merchandisers who believe the goods we bring home
              should tell stories. From our first handcrafted drop to today’s globally sourced collections, our mission
              has stayed the same—champion thoughtful products that elevate the rituals of daily life.
            </p>
            <div className="grid gap-4 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-inner backdrop-blur sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">At a glance</p>
                <p className="text-lg font-semibold text-slate-900">
                  Design lovers in 42 countries trust our curations and concierge service.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </span>
                  2024 Conscious Commerce Award honoree
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                  Same-day responses from a dedicated concierge team
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute -right-6 -top-10 h-40 w-40 rounded-full bg-sky-300/40 blur-2xl" aria-hidden="true" />
            <div className="absolute -left-8 -bottom-10 h-44 w-44 rounded-full bg-indigo-200/50 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-xl shadow-sky-200/30 backdrop-blur">
              <div className="relative aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3"
                  alt="The Aahaas creative studio with mood boards and prototypes"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src =
                      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3';
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-slate-900/5 to-transparent" />
              </div>
              <div className="space-y-4 border-t border-white/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Inside the studio</p>
                <p className="text-base text-slate-700">
                  We host tactile labs, artisan residencies, and member salons in our San Francisco studio—blending
                  hands-on creation with community connection.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 shadow-sm">
                  Join a studio session
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 rounded-3xl border border-white/60 bg-white/75 p-8 shadow-inner backdrop-blur lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Our milestones</h2>
            <p className="text-sm text-slate-500">
              Guided by curiosity and care, every chapter has pushed us to dream bigger while staying anchored in our values.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="space-y-3 rounded-2xl border border-slate-100 bg-white/80 p-5 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-6 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-inner backdrop-blur">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">What guides us</h2>
            <p className="text-sm text-slate-500">
              Our north star is a blend of intuition, equity, and care. These pillars shape every partnership and product drop.
            </p>
            <div className="grid gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm transition hover:border-sky-200 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 shadow-inner">
                    {value.icon}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-slate-900">{value.title}</h3>
                    <p className="text-sm text-slate-500">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-inner backdrop-blur">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">The humans behind Aahaas</h2>
            <p className="text-sm text-slate-500">
              Our team is a playful mix of strategists, storytellers, and sustainability champions united by a love for craft.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white/75 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`h-32 w-full rounded-2xl bg-cover bg-center ${member.headshot}`} />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{member.title}</p>
                    <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-sm text-slate-500">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/60 bg-white/75 p-8 shadow-inner backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">By the numbers</h2>
              <p className="text-sm text-slate-500">
                The impact that keeps us motivated—real progress fueled by an ever-growing community.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-100 bg-white/80 p-5 text-slate-700 shadow-sm transition hover:border-sky-200 hover:shadow-lg"
                >
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-900/95 p-6 text-slate-100 shadow-lg shadow-slate-900/30 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Coming soon</p>
              <h3 className="mt-1 text-lg font-semibold text-white">Aahaas Residency: The Circular Edit</h3>
              <p className="text-sm text-slate-300">
                Applications open next quarter for designers focused on regenerative materials and circular economies.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/70 bg-sky-500/90 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-500"
            >
              Join waitlist
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


