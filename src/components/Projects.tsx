import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Project {
  id: number;
  num: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  accentFrom: string;
  accentTo: string;
  borderColor: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    num: '01',
    title: 'TripRecommendator',
    description:
      'Plataforma de recomendaciones de viaje impulsada por IA. Integra múltiples APIs externas para generar sugerencias personalizadas de destinos. Arquitectura orientada a servicios con gestión asíncrona de peticiones y respuestas de LLM.',
    image:
      'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['JavaScript', 'API Integration', 'AI / LLM', 'Vercel'],
    github: 'https://github.com/Nol3/TripRecommendator',
    demo: 'https://trip-recommendator-two.vercel.app/',
    accentFrom: 'from-blue-500/15',
    accentTo: 'to-cyan-500/5',
    borderColor: 'border-blue-500/15',
  },
  {
    id: 2,
    num: '02',
    title: 'PokéAPI Explorer',
    description:
      'Aplicación React con tipado estricto TypeScript que consume la PokéAPI y genera imágenes complementarias mediante IA. Implementa gestión de estado eficiente, lazy loading de recursos y renders optimizados. Desplegada en Vercel con CI automático.',
    image:
      'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'AI Images', 'Vite', 'REST API'],
    github: 'https://github.com/Nol3/PokeApi_Globant',
    demo: 'https://poke-api-9egb.vercel.app/',
    accentFrom: 'from-cyan-500/15',
    accentTo: 'to-blue-500/5',
    borderColor: 'border-cyan-500/15',
  },
];

const ProjectCard = ({ project, reversed }: { project: Project; reversed: boolean }) => {
  const { ref, visible } = useScrollReveal(0.08);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} group relative`}
      style={{ transitionDelay: `${project.id * 80}ms` }}
    >
      <div
        className={`grid md:grid-cols-[1fr_1.15fr] rounded-2xl overflow-hidden border ${project.borderColor} bg-card hover:bg-card-hover transition-all duration-500 hover:border-opacity-40`}
        style={{ direction: reversed ? 'rtl' : 'ltr' }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ direction: 'ltr' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-52 md:h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
          {/* Gradient overlays */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${project.accentFrom} ${project.accentTo} mix-blend-screen pointer-events-none`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-${reversed ? 'l' : 'r'} from-transparent to-card pointer-events-none`}
          />
          {/* Quick-action badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#050a18]/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#050a18]/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Demo"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center" style={{ direction: 'ltr' }}>
          <p className="text-blue-400/60 font-mono text-xs mb-3 tracking-widest">{project.num}</p>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-blue-500/[0.06] border border-blue-500/12 rounded text-xs text-blue-300/60 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 items-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-white text-sm transition-colors duration-200"
            >
              <Github size={14} />
              Código
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
            >
              Demo en vivo
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-surface relative">
      <div className="section-divider" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <div
          ref={titleRef}
          className={`reveal ${titleVisible ? 'visible' : ''} mb-16`}
        >
          <p className="text-blue-400 font-mono text-xs mb-3 tracking-[0.2em] uppercase">
            02 — Proyectos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Lo que he construido
          </h2>
          <span className="title-accent" />
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} reversed={i % 2 === 1} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Nol3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] hover:bg-white/[0.07] border border-white/8 hover:border-white/15 text-slate-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-200"
          >
            <Github size={15} />
            Ver todos los repositorios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
