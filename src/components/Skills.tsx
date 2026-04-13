import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CATEGORIES = [
  {
    name: 'Frontend',
    accent: 'blue' as const,
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML / CSS', 'Vite'],
  },
  {
    name: 'Backend',
    accent: 'cyan' as const,
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'C / C++', 'GraphQL', 'REST APIs'],
  },
  {
    name: 'Datos & Infra',
    accent: 'blue' as const,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'Linux', 'Vercel', 'CI/CD'],
  },
];

const EXTRA_SKILLS = [
  'TCP/IP', 'Redes (Cisco/Teldat)', 'Ciberseguridad', 'Linux Admin',
  'Bash / Shell', 'OWASP', 'SSH', 'Wireshark', 'Responsive Design',
  'UI/UX Design', 'Microservicios', 'WebSockets',
];

const accentMap = {
  blue: {
    bar: 'from-blue-500 to-blue-400',
    chip: 'bg-blue-500/[0.06] border-blue-500/15 text-blue-300/70 hover:border-blue-400/30 hover:text-blue-200',
    icon: 'text-blue-400',
    dot: 'bg-blue-400',
  },
  cyan: {
    bar: 'from-cyan-500 to-cyan-400',
    chip: 'bg-cyan-500/[0.06] border-cyan-500/15 text-cyan-300/70 hover:border-cyan-400/30 hover:text-cyan-200',
    icon: 'text-cyan-400',
    dot: 'bg-cyan-400',
  },
};

const SkillCard = ({
  name,
  accent,
  skills,
  delay,
}: (typeof CATEGORIES)[0] & { delay: number }) => {
  const { ref, visible } = useScrollReveal(0.1);
  const a = accentMap[accent];

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} card-glow rounded-2xl overflow-hidden`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top accent bar */}
      <div className={`h-[2px] w-full bg-gradient-to-r ${a.bar}`} />

      <div className="p-6">
        {/* Category header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className={`w-1.5 h-5 rounded-full bg-gradient-to-b ${a.bar}`} />
          <h3 className="text-white font-semibold text-base">{name}</h3>
        </div>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1.5 border rounded-lg text-sm font-mono transition-all duration-200 cursor-default ${a.chip}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal();
  const { ref: extraRef, visible: extraVisible } = useScrollReveal(0.1);

  return (
    <section id="skills" className="py-24 bg-deep relative">
      <div className="section-divider" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <div
          ref={titleRef}
          className={`reveal ${titleVisible ? 'visible' : ''} mb-16`}
        >
          <p className="text-blue-400 font-mono text-xs mb-3 tracking-[0.2em] uppercase">
            03 — Habilidades
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Mi stack tecnológico
          </h2>
          <span className="title-accent" />
        </div>

        {/* Main categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.name} {...cat} delay={i * 100} />
          ))}
        </div>

        {/* Extra skills */}
        <div
          ref={extraRef}
          className={`reveal ${extraVisible ? 'visible' : ''} mt-14`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.2em] whitespace-nowrap">
              Redes & Sistemas
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-white/8 to-transparent" />
          </div>

          <div className="flex flex-wrap gap-2.5">
            {EXTRA_SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-2 bg-white/[0.03] border border-white/8 rounded-full text-sm text-slate-400 hover:border-blue-500/25 hover:text-slate-200 hover:bg-blue-500/[0.04] transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
