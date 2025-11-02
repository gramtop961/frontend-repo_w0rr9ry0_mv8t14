export default function Projects() {
  const projects = [
    {
      title: 'Fintech dashboard',
      tag: 'Product design + build',
      desc: 'Lightweight analytics with soft color tokens and motion patterns.',
    },
    {
      title: 'Commerce UI kit',
      tag: 'Design system',
      desc: 'Headless components, pastel palette, and accessible flows.',
    },
    {
      title: 'Banking mobile web',
      tag: 'Frontend',
      desc: 'Smooth micro‑interactions and performance‑first architecture.',
    },
  ];

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Selected work</h2>
          <p className="mt-2 text-slate-600">A few projects that reflect my style and process.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-sm backdrop-blur-md"
          >
            <div className="h-40 w-full bg-gradient-to-br from-sky-100 via-violet-100 to-pink-100" />
            <div className="p-5">
              <span className="text-xs font-medium text-slate-500">{p.tag}</span>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
