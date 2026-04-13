import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollProgress: number;
}

const NAV_ITEMS = [
  { label: 'Sobre Mí', id: 'about' },
  { label: 'Proyectos', id: 'projects' },
  { label: 'Habilidades', id: 'skills' },
];

const Header = ({ scrollProgress }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const ids = ['contact', 'skills', 'projects', 'about', 'hero'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050a18]/85 backdrop-blur-2xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="font-mono text-base font-medium text-white/80 hover:text-white transition-colors duration-200 tracking-tight"
          >
            <span className="text-blue-400">&lt;</span>
            <span>AC</span>
            <span className="text-cyan-400">.</span>
            <span>dev</span>
            <span className="text-blue-400"> /&gt;</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                  activeSection === id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400" />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="ml-3 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              Contacto
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-white/[0.06] flex flex-col gap-0.5">
            {[...NAV_ITEMS, { label: 'Contacto', id: 'contact' }].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-left px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                  id === 'contact'
                    ? 'text-blue-400 hover:text-blue-300 hover:bg-blue-500/5'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
