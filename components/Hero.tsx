import React, { useState, useEffect } from 'react';

interface HeroProps {
  onScrollToProducts: () => void;
}

const images = [
  '/img/Produto1.jpg',
  '/img/Produto2.jpg',
  '/img/Produto4.jpg',
  '/img/Produto5.jpg',
  '/img/Produto8.jpg',
  '/img/Produto10.jpg',
  '/img/Produto11.jpg',
  '/img/Produto16.jpg',
  '/img/Produto17.jpg',
  '/img/Produto18.jpg',
  '/img/Produto19.jpg',
  '/img/Produto20.jpg',
  '/img/Produto21.jpg',
  '/img/Produto22.jpg',
  '/img/Produto23.jpg',
  '/img/Produto24.jpg',
  '/img/Produto25.jpg',
  '/img/Produto26.jpg',
  '/img/Produto27.jpg',
  '/img/Produto28.jpg',
  '/img/Produto29.jpg',
  '/img/Produto30.jpg',
  '/img/Produto31.jpg',
  '/img/Produto32.jpg',
  '/img/Produto33.jpg',
  '/img/Produto34.jpg',
  '/img/Produto35.jpg',
  '/img/Produto36.jpg',
  '/img/Produto37.jpg',
  '/img/Produto38.jpg',
  '/img/Produto39.jpg',
  '/img/Produto40.jpg',
  '/img/Produto42.jpg',
  '/img/Produto43.jpg',
  '/img/Produto44.jpg',
  '/img/Produto45.jpg',
  '/img/Produto46.jpg',
  '/img/Produto47.jpg',
  '/img/Produto48.jpg',
  '/img/Produto49.jpg',
  '/img/Produto50.jpg',
  '/img/Produto51.jpg',
  '/img/Produto52.jpg',
  '/img/Produto53.jpg',
  '/img/Produto54.jpg'
];

const Hero: React.FC<HeroProps> = ({ onScrollToProducts }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative px-4 overflow-hidden pt-0">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
          />
        ))}
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