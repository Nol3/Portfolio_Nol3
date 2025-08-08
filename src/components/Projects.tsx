import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'TripRecommendator',
      description: 'Proyecto orientado a demostrar conocimiento de conexiones con API y mostrar respuestas de una IA para recomendaciones de viaje',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800', // travel-themed placeholder
      tags: ['JavaScript', 'API Integration', 'AI Integration'],
      github: 'https://github.com/Nol3/TripRecommendator',
      demo: 'https://trip-recommendator-two.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'PokeApi',
      description: 'Proyecto desarrollado en React para mostrar conocimiento de API y mostrar imágenes generadas por una IA',
      image: 'https://images.pexels.com/photos/133579/pexels-photo-133579.jpeg?auto=compress&cs=tinysrgb&w=800', // Pokémon/gaming placeholder
      tags: ['React', 'TypeScript', 'API Integration', 'AI Generated Images'],
      github: 'https://github.com/Nol3/PokeApi_Globant',
      demo: 'https://poke-api-9egb.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard del clima con visualización de datos interactiva. Integra APIs meteorológicas y muestra pronósticos detallados.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Chart.js', 'API Integration'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Sitio web portfolio responsivo con animaciones avanzadas y diseño moderno. Desarrollado con Next.js y Tailwind CSS.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'Red social con funciones de chat en tiempo real, publicaciones y sistema de seguimiento. Backend con GraphQL.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'GraphQL', 'Apollo'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Crypto Tracker',
      description: 'Aplicación para seguimiento de criptomonedas con gráficos en tiempo real y alertas de precio.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'WebSocket', 'D3.js'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mis Proyectos
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Una selección de mis trabajos más destacados
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Proyectos Destacados</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.github}
                      className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Otros Proyectos</h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-lg p-6 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Nol3?tab=repositories"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>Ver Todos los Proyectos</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;