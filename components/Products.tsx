import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import type { Product } from '../types';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'earring', name: 'Brincos' },
  { id: 'necklace', name: 'Colares' },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-satisfy text-2xl sm:text-3xl text-white">{product.name}</h3>
        <p className="text-amber-100 font-sans text-sm sm:text-base mt-1 sm:mt-2">{product.description}</p>
        <button 
          className="mt-3 sm:mt-4 px-4 py-2 bg-white text-[#8C5626] font-bebas text-sm sm:text-base tracking-wider uppercase rounded-full shadow-md hover:bg-[#F2F2F2] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A6783F]"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart or view details logic here
          }}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  </div>
);

// List of product images for the carousel
const carouselImages = [
  { src: '/img/Produto8.jpg', alt: 'Produto 8' },
  { src: '/img/Header_3.jpg', alt: 'Cabeçalho 3' },
  { src: '/img/Produto32.jpg', alt: 'Produto 32' },
  { src: '/img/Produto19.jpg', alt: 'Produto 19' },
  { src: '/img/Header_5.jpg', alt: 'Cabeçalho 5' }
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === activeCategory);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (carouselImages.length - 3));
    }, 3000);
    
    return () => clearInterval(timer);
  }, [isPaused]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, carouselImages.length - 4));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-bebas tracking-widest text-[#A6783F] mb-2 inline-block">NOSSAS CRIAÇÕES</span>
          <h2 className="font-satisfy text-3xl sm:text-4xl md:text-5xl text-[#8C5626] mb-3">Coleção Exclusiva</h2>
          <div className="w-20 h-1 bg-[#D9B36C] mx-auto"></div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 mb-6 sm:mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm sm:text-base font-bebas tracking-wider rounded-full transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-[#8C5626] text-white'
                    : 'bg-white text-[#8C5626] border border-[#D9B36C] hover:bg-[#F2E8B3]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden mt-10">
          <div className="relative w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 25}%)`,
                width: `${carouselImages.length * 25}%`
              }}
            >
              {carouselImages.map((image, index) => (
                <div 
                  key={index}
                  className="w-1/5 px-2 flex-shrink-0"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="w-full h-96 overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 text-[#8C5626] p-2 rounded-full shadow-md hover:bg-white transition-all z-10"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 text-[#8C5626] p-2 rounded-full shadow-md hover:bg-white transition-all z-10"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;