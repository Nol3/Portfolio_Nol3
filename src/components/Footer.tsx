import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep border-t border-white/[0.05] py-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="font-mono text-sm font-medium text-white/60 hover:text-white/90 transition-colors duration-200"
          >
            <span className="text-blue-400/70">&lt;</span>
            <span>AC</span>
            <span className="text-cyan-400/70">.</span>
            <span>dev</span>
            <span className="text-blue-400/70"> /&gt;</span>
          </button>

          {/* Nav links */}
          <div className="flex items-center gap-5 text-sm text-slate-500">
            {['about', 'projects', 'skills', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-slate-300 transition-colors duration-200 capitalize"
              >
                {id === 'about'
                  ? 'Sobre mí'
                  : id === 'projects'
                  ? 'Proyectos'
                  : id === 'skills'
                  ? 'Habilidades'
                  : 'Contacto'}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/Nol3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-300 rounded-lg hover:bg-white/5 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-cardenas-parejo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-300 rounded-lg hover:bg-white/5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:alejandrocp.dev@gmail.com"
              className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-300 rounded-lg hover:bg-white/5 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-slate-600 text-xs font-mono">
            © {year} Alejandro Cárdenas — Construido con React + TypeScript + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
