import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TIMELINE = [
  {
    year: '2021',
    title: 'Inicio en programación',
    desc: 'Primeros proyectos con HTML, CSS y JavaScript. Fundamentos de lógica y resolución de problemas.',
    side: 'blue' as const,
  },
  {
    year: '2022',
    title: '42 Málaga',
    desc: 'Programación de sistemas en C y C++, redes TCP/IP, administración de sistemas Linux, algoritmos y estructuras de datos.',
    side: 'cyan' as const,
  },
  {
    year: '2023',
    title: 'Full Stack Development',
    desc: 'Especialización en React, Node.js, TypeScript y FastAPI. Primeras aplicaciones full stack en producción.',
    side: 'blue' as const,
  },
  {
    year: '2024–Hoy',
    title: 'Proyectos profesionales',
    desc: 'Desarrollo de productos completos con Docker, despliegue en Vercel, integración de APIs e IA generativa.',
    side: 'cyan' as const,
  },
];

const STACK = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'FastAPI',
  'C', 'C++', 'SQL', 'MongoDB', 'Docker', 'Linux', 'Git',
];

const STATS = [
  { value: '20+', label: 'Proyectos' },
  { value: '3+', label: 'Años exp.' },
  { value: '10+', label: 'Certificaciones' },
  { value: '10+', label: 'Colaboraciones' },
];

const About = () => {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal();
  const { ref: leftRef, visible: leftVisible } = useScrollReveal(0.1);
  const { ref: rightRef, visible: rightVisible } = useScrollReveal(0.1);
  const { ref: statsRef, visible: statsVisible } = useScrollReveal(0.15);

  return (
    <section id="about" className="py-24 bg-deep relative">
      <div className="section-divider" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <div
          ref={titleRef}
          className={`reveal ${titleVisible ? 'visible' : ''} mb-16`}
        >
          <p className="text-blue-400 font-mono text-xs mb-3 tracking-[0.2em] uppercase">
            01 — Sobre mí
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">¿Quién soy?</h2>
          <span className="title-accent" />
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — Bio */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftVisible ? 'visible' : ''} space-y-5`}
            style={{ transitionDelay: '80ms' }}
          >
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Soy un desarrollador full stack con más de 3 años de experiencia construyendo
              productos digitales. Me formé en{' '}
              <strong className="text-white font-semibold">42 Málaga</strong>, donde desarrollé
              una base sólida en programación de sistemas, algoritmos, redes y administración
              de infraestructura.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Esa formación de bajo nivel diferencia mi perspectiva: entiendo lo que ocurre
              debajo del framework. Trabajo con el stack moderno de JavaScript y Python, pero
              sin perder de vista el rendimiento y la arquitectura real del sistema.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Me apasionan los proyectos con impacto real, los retos técnicos complejos y el
              diseño de interfaces que realmente importan al usuario.
            </p>

            {/* Stack chips */}
            <div className="pt-4">
              <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.15em] mb-3">
                Stack principal
              </p>
              <div className="flex flex-wrap gap-2">
                {STACK.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-blue-500/[0.06] border border-blue-500/15 rounded-md text-sm text-blue-300/75 font-mono hover:border-blue-400/30 hover:text-blue-200 hover:bg-blue-500/10 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Timeline */}
          <div
            ref={rightRef}
            className={`reveal-right ${rightVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '160ms' }}
          >
            <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.15em] mb-7">
              Trayectoria
            </p>

            <div className="relative">
              {/* Vertical track */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/40 via-cyan-500/25 to-transparent" />

              <div className="space-y-5">
                {TIMELINE.map(({ year, title, desc, side }) => (
                  <div key={year} className="relative pl-9">
                    {/* Node */}
                    <div
                      className={`absolute left-0 top-2 w-[22px] h-[22px] rounded-full bg-deep border-2 flex items-center justify-center ${
                        side === 'blue' ? 'border-blue-500' : 'border-cyan-500'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          side === 'blue' ? 'bg-blue-400' : 'bg-cyan-400'
                        }`}
                      />
                    </div>

                    <div className="group card-glow rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span
                          className={`text-xs font-mono font-medium ${
                            side === 'blue' ? 'text-blue-400' : 'text-cyan-400'
                          }`}
                        >
                          {year}
                        </span>
                        <span className="text-white text-sm font-semibold">{title}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className={`reveal ${statsVisible ? 'visible' : ''} mt-20`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="bg-[#050a18] hover:bg-white/[0.02] p-6 md:p-8 text-center transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1.5">{value}</div>
                <div className="text-slate-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
