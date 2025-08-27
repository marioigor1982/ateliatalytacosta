import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs = { home: homeRef, about: aboutRef, products: productsRef, contact: contactRef };

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Efeito para atualizar o favicon
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const size = 32;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Círculo de fundo
      ctx.beginPath();
      ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
      ctx.fillStyle = '#8C5626';
      ctx.fill();
      
      // Texto 'T' no centro
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('T', size/2, size/2);
      
      // Atualiza o favicon
      const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
      favicon.rel = 'icon';
      favicon.href = canvas.toDataURL('image/png');
      document.head.appendChild(favicon);
    }
  }, []);

  return (
    <div className="bg-white font-bebas text-gray-800">
      <Header refs={refs} onScrollTo={handleScrollTo} />
      <main>
        <div ref={homeRef}>
          <Hero onScrollToProducts={() => handleScrollTo(productsRef)} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={productsRef}>
          <Products />
        </div>
        <div ref={contactRef}>
          <CallToAction />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
