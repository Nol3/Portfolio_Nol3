import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            {'<Dev/>'}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <User size={18} />
              <span>Sobre Mí</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <Briefcase size={18} />
              <span>Proyectos</span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <Code size={18} />
              <span>Habilidades</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={18} />
              <span>Contacto</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-cyan-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 px-4 py-2"
              >
                <User size={18} />
                <span>Sobre Mí</span>
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 px-4 py-2"
              >
                <Briefcase size={18} />
                <span>Proyectos</span>
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 px-4 py-2"
              >
                <Code size={18} />
                <span>Habilidades</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg mx-4"
              >
                <Mail size={18} />
                <span>Contacto</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;