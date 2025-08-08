import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import fotoPerfil from '../photo/Primera.jpeg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src={fotoPerfil}
                  alt="Foto de perfil"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 animate-pulse"></div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Hola, soy
            </span>
            <br />
            <span className="text-white">Alejandro Cárdenas</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
            Desarrollador Full Stack
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Apasionado por crear experiencias digitales excepcionales.
            Me especializo en desarrollo web moderno, ciberseguridad, redes y sistemas operativos.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Nol3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Github size={20} className="text-slate-300 hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-cardenas-parejo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Linkedin size={20} className="text-slate-300 hover:text-white" />
            </a>
            <a
              href="mailto:alejandrocp.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail size={20} className="text-slate-300 hover:text-white" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contáctame
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-slate-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;