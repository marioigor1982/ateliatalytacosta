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

  const navItems = [
    { label: 'Início', ref: refs.home },
    { label: 'Sobre Nós', ref: refs.about },
    { label: 'Coleção', ref: refs.products },
    { label: 'Contato', ref: refs.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    setIsMenuOpen(false);
    onScrollTo(ref);
  };

  return (
    <header className={`sticky top-0 z-50 shadow-lg transition-all duration-300 ${
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
            <ul className="flex space-x-6 lg:space-x-8 items-center font-agbalumo text-lg lg:text-xl">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.ref)}
                    className="hover:text-[#F2E8B3] transition-colors duration-300 px-2 py-1"
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
              className="text-white hover:text-[#F2E8B3] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-3 font-agbalumo text-xl">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.ref)}
                    className="w-full text-left px-4 py-2 hover:bg-[#A6783F] rounded-lg transition-colors duration-300"
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