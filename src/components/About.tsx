import React from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code2, label: 'Proyectos Completados', value: '20+' },
    { icon: Users, label: 'Trabajos en equipo', value: '10+' },
    { icon: Rocket, label: 'Años de Experiencia', value: '3+' },
    { icon: Award, label: 'Certificaciones', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Conoce más sobre mi experiencia y pasión por el desarrollo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Soy un desarrollador full stack apasionado por crear soluciones digitales innovadoras.
              Con más de 3 años de experiencia, me especializo en tecnologías modernas como React,
              Node.js, TypeScript y bases de datos SQL/NoSQL. Además de mi conocimientos en redes,
			  sistemas operativos y programación en C y C++ gracias a 42 Málaga.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre
              buscando las mejores prácticas y las últimas tendencias en desarrollo web.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'C', 'C++', 'Redes', 'S.O.', 'Docker', 'Git', 'Linux', 'Windows', 'MacOS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-full text-cyan-400 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{value}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;