import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, MapPin } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import fotoPerfil from '../photo/Primera.jpeg';

const ROLES = [
  'Full Stack Developer',
  'Systems Programmer',
  'Cybersecurity Enthusiast',
  'UI/UX Craftsman',
];

const TECH_BADGES = ['React', 'TypeScript', 'Node.js', 'FastAPI', 'C / C++', 'Docker'];

const Hero = () => {
  const role = useTypewriter(ROLES);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep"
    >
      {/* Grid dot background */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="space-y-7">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-500/8 border border-emerald-500/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-xs font-medium tracking-wide">
                Disponible para trabajar
              </span>
            </div>

            {/* Name */}
            <div>
              <p className="text-slate-500 text-sm font-mono mb-2 tracking-wider">Hola, soy</p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Alejandro
                <br />
                <span className="text-gradient">Cárdenas</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="h-7 flex items-center">
              <span className="text-lg md:text-xl text-slate-300 font-mono">
                {role}
                <span className="inline-block w-[2px] h-5 bg-blue-400 ml-0.5 align-middle animate-cursor-blink" />
              </span>
            </div>

            {/* Bio */}
            <p className="text-slate-400 leading-relaxed text-base md:text-lg max-w-xl">
              Construyo aplicaciones web de alto rendimiento con atención al detalle.
              Formado en{' '}
              <span className="text-white font-medium">42 Málaga</span>
              {' '}— redes, sistemas y bajo nivel son parte de mi ADN técnico.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30"
              >
                Ver proyectos
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/4 hover:bg-white/8 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-lg font-medium text-sm transition-all duration-200"
              >
                Contacto
              </button>
            </div>

            {/* Social + location */}
            <div className="flex items-center gap-1 pt-1">
              <a
                href="https://github.com/Nol3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/8 rounded-lg transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/alejandro-cardenas-parejo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/8 rounded-lg transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="mailto:alejandrocp.dev@gmail.com"
                className="w-9 h-9 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/8 rounded-lg transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
              <div className="w-px h-5 bg-white/8 mx-2" />
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <MapPin size={12} />
                Málaga, España
              </span>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="flex flex-col items-center gap-6">
            {/* Profile photo with spinning gradient ring */}
            <div className="relative" style={{ width: 268, height: 268 }}>
              {/* Spinning conic gradient ring */}
              <div
                className="absolute inset-[-3px] rounded-full animate-spin-slow"
                style={{
                  background:
                    'conic-gradient(from 0deg, #3b82f6 0%, #22d3ee 35%, transparent 60%, transparent 75%, #3b82f6 100%)',
                }}
              />
              {/* Background gap between ring and photo */}
              <div className="absolute inset-[1px] rounded-full bg-deep" />
              {/* Photo */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden">
                <img
                  src={fotoPerfil}
                  alt="Alejandro Cárdenas"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow halo */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.15)] pointer-events-none" />
            </div>

            {/* Tech badge pills */}
            <div className="flex flex-wrap gap-2 justify-center" style={{ maxWidth: 280 }}>
              {TECH_BADGES.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white/[0.04] border border-white/8 rounded-md text-xs text-slate-400 font-mono hover:border-blue-500/30 hover:text-slate-200 hover:bg-blue-500/5 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors duration-300 group"
          >
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase group-hover:text-slate-300 transition-colors">
              scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent group-hover:from-slate-400 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
