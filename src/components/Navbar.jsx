import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 flex h-14 items-center justify-between rounded-2xl border border-white/30 bg-white/60 px-4 shadow-sm backdrop-blur-md">
          <a href="#home" className="font-semibold tracking-tight text-slate-800">
            <span className="text-slate-900">Your</span>
            <span className="ml-1 rounded-md bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#work" className="transition-colors hover:text-slate-900">Work</a>
            <a href="#about" className="transition-colors hover:text-slate-900">About</a>
            <a href="#contact" className="transition-colors hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-md transition hover:bg-white"
            >
              <Mail size={16} />
              Say hello
            </a>
            <a aria-label="GitHub" href="https://github.com" className="rounded-lg p-2 text-slate-600 hover:bg-white hover:text-slate-900">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" className="rounded-lg p-2 text-slate-600 hover:bg-white hover:text-slate-900">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
