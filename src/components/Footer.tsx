//import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {'<Nol3.Dev/>'}
            </div>
            <p className="text-slate-400 leading-relaxed">
              Desarrollador full stack apasionado por la Tecnología y el Café.
            </p>
            <div className="flex space-x-4">
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
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contacto</h3>
            <div className="space-y-2 text-slate-400">
              <p>alejandrocp.dev@gmail.com</p>
              <p>622713901</p>
              <p>Málaga, España</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Alejandro Cárdenas. Hecho con</span>
            <Heart size={16} className="text-red-500" />
            <span>y mucho café ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;