import React, { useRef } from 'react';
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
