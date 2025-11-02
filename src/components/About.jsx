export default function About() {
  const skills = [
    { name: 'React + Vite', desc: 'Component-driven UIs with modern tooling.' },
    { name: 'Tailwind CSS', desc: 'Design systems and accessible patterns.' },
    { name: 'Framer Motion', desc: 'Micro‑interactions and fluid transitions.' },
    { name: 'Design Systems', desc: 'Tokens, palettes, and scalable components.' },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About</h2>
        <p className="mt-3 text-slate-600">
          Frontend engineer focused on product quality, subtle motion, and pastel palettes that feel calm yet professional.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-sm backdrop-blur-md transition hover:shadow-md"
          >
            <h3 className="text-sm font-semibold text-slate-900">{s.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
