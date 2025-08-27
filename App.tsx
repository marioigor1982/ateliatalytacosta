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
    if (ref.current) {
      const headerOffset = ref.current === homeRef.current ? 0 : 80; // Não aplica offset para a seção inicial
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
    <div className="min-h-screen flex flex-col">
      <style jsx global>{`
        html {
          scroll-padding-top: 80px; /* Altura do header */
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Header refs={refs} onScrollTo={handleScrollTo} />
      <main className="w-full pt-0">
        <div ref={homeRef} className="w-full">
          <Hero onScrollToProducts={() => handleScrollTo(productsRef)} />
        </div>
        <div ref={aboutRef} className="w-full">
          <About />
        </div>
        <div ref={productsRef} className="w-full">
          <Products />
        </div>
        <div ref={contactRef} className="w-full">
          <CallToAction />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
