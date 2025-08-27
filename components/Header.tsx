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

  // Add fonts to document head
  useEffect(() => {
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    
    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';
    
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Agbalumo&family=Bebas+Neue&family=Dancing+Script:wght@400..700&family=Satisfy&display=swap';
    fontLink.rel = 'stylesheet';
    
    document.head.append(preconnect1, preconnect2, fontLink);
    
    return () => {
      [preconnect1, preconnect2, fontLink].forEach(el => el.remove());
    };
  }, []);

  return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#8C5626]/90 backdrop-blur-sm shadow-lg py-2' 
            : 'bg-gradient-to-r from-[#8C5626] to-[#A6783F] py-4'
        }`}
      >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={LOGO_URL} 
              alt="Talyta Costa Logo" 
              className={`${isScrolled ? 'h-10 w-10' : 'h-12 w-12'} transition-all duration-300 mr-3 rounded-full object-cover border-2 border-[#F2E8B3]`} 
            />
            <span className="font-satisfy text-2xl sm:text-3xl text-white">Talyta Costa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.ref)}
                    className={`px-4 py-2 rounded-full text-base font-bebas tracking-wider transition-all duration-200 ${
                      activeSection === item.id 
                        ? 'bg-[#F2E8B3] text-[#8C5626] shadow-lg' 
                        : 'text-white hover:bg-[#F2E8B3] hover:text-[#8C5626] hover:shadow-md'
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#F2E8B3] hover:text-[#8C5626] focus:outline-none transition-all duration-200"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
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
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } ${isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-[#8C5626]'}`}
        >
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.ref)}
                    className={`w-full text-left px-6 py-3 rounded-full text-lg font-bebas tracking-wider transition-all duration-200 ${
                      activeSection === item.id 
                        ? 'bg-[#F2E8B3] text-[#8C5626] shadow-lg' 
                        : 'text-white hover:bg-[#F2E8B3] hover:text-[#8C5626] hover:shadow-md'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;