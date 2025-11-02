import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient to improve contrast without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-40 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md">
          Available for freelance • Fintech & e‑commerce UI
        </span>
        <h1 className="bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Soft, modern interfaces for digital products
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          I craft smooth, pastel‑toned experiences with a focus on clarity, motion, and accessibility.
          Let’s build something elegant and performant together.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            View selected work
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
