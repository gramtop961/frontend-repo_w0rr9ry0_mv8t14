import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/40 bg-white/70 p-8 text-center shadow-sm backdrop-blur-md">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Let’s work together</h2>
        <p className="mt-3 text-slate-600">Have a project in mind? I’m available for collaborations and freelance work.</p>
        <a
          href="mailto:hello@example.com"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          <Mail size={16} />
          hello@example.com
        </a>
      </div>

      <p className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Your Name — Built with React & Tailwind</p>
    </section>
  );
}
