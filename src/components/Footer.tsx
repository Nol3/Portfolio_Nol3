import React from 'react';
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
              {'<Dev/>'}
            </div>
            <p className="text-slate-400 leading-relaxed">
              Desarrollador full stack apasionado por crear experiencias digitales excepcionales.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Github size={18} className="text-slate-300 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin size={18} className="text-slate-300 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Mail size={18} className="text-slate-300 group-hover:text-white" />
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
              <p>tu@email.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Ciudad, País</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Tu Nombre. Hecho con</span>
            <Heart size={16} className="text-red-500" />
            <span>y mucho café ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;