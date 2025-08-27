import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';
import type { SectionRefs } from '../types';

interface HeaderProps {
  refs: SectionRefs;
  onScrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ refs, onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Início', ref: refs.home },
    { id: 'about', label: 'Sobre Nós', ref: refs.about },
    { id: 'products', label: 'Coleção', ref: refs.products },
    { id: 'contact', label: 'Contato', ref: refs.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se a página foi rolada
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);

      // Verifica qual seção está visível
      const scrollPosition = window.scrollY + 100; // Ajuste para ativar um pouco antes

      // Verifica cada seção para ver qual está visível
      const sections = [
        { id: 'home', ref: refs.home },
        { id: 'about', ref: refs.about },
        { id: 'products', ref: refs.products },
        { id: 'contact', ref: refs.contact },
      ];

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Executa uma vez no carregamento para definir a seção ativa inicial
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs]);

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    setIsMenuOpen(false);
    onScrollTo(ref);
  };

  return (
    <header className={`fixed w-full z-50 shadow-lg transition-all duration-300 ${
      isScrolled ? 'py-1' : 'py-3'
    } bg-gradient-to-r from-[#D9B36C] via-[#A6783F] to-[#8C5626] text-white`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={LOGO_URL} 
              alt="Talyta Costa Logo" 
              className={`${isScrolled ? 'h-10 w-10' : 'h-12 w-12'} transition-all duration-300 mr-3 rounded-full object-cover border-2 border-[#F2E8B3]`} 
            />
            <span className="font-agbalumo text-2xl sm:text-3xl">Talyta Costa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.ref)}
                    className={`px-4 py-2 rounded-full text-base font-bebas tracking-wider transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'bg-[#8C5626] text-white shadow-md' 
                        : 'text-white hover:bg-[#8C5626]/80'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#8C5626] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.ref)}
                    className={`w-full text-left px-6 py-3 rounded-full text-lg font-bebas tracking-wider transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'bg-[#8C5626] text-white shadow-md' 
                        : 'text-white hover:bg-[#8C5626]/80'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;