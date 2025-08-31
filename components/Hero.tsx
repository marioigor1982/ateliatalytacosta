import React, { useState, useEffect } from 'react';

interface HeroProps {
  onScrollToProducts: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToProducts }) => {

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative px-4 overflow-hidden pt-0">
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/img/Ateliê_Talyta.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="text-center z-10 max-w-6xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <h1 className="font-satisfy text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-lg leading-tight">
          Elegância que Floresce
        </h1>
        <p className="font-bebas text-xl sm:text-2xl md:text-3xl mt-4 md:mt-6 tracking-wider uppercase drop-shadow-md max-w-2xl mx-auto">
          Semi-jóias únicas, feitas à mão com amor e flores naturais.
        </p>
        <div className="mt-8 md:mt-12">
          <button 
            onClick={onScrollToProducts}
            className="px-6 py-3 sm:px-8 sm:py-3 bg-white text-[#8C5626] font-bebas text-lg sm:text-xl tracking-wider uppercase rounded-full shadow-lg hover:bg-[#F2F2F2] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A6783F]"
          >
            Ver Coleção
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={onScrollToProducts}
          className="text-white focus:outline-none"
          aria-label="Rolar para baixo"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;