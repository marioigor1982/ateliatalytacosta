import React from 'react';
import { LOGO_URL, INSTAGRAM_LINK, WHATSAPP_LINK, InstagramIcon, WhatsAppIcon } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-[#D9B36C] via-[#A6783F] to-[#8C5626] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and About */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center mb-4">
              <img 
                src={LOGO_URL} 
                alt="Talyta Costa Logo" 
                className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-2 border-[#F2E8B3]" 
              />
              <h3 className="font-agbalumo text-3xl md:text-4xl ml-3">Talyta Costa</h3>
            </div>
            <p className="text-sm text-[#F2E8B3] mt-2">
              Semi-jóias artesanais feitas com amor e dedicação, trazendo elegância e sofisticação para o seu estilo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bebas text-xl md:text-2xl mb-4 text-[#F2E8B3]">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-[#F2E8B3] transition-colors duration-300">Início</a></li>
              <li><a href="#sobre" className="hover:text-[#F2E8B3] transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#produtos" className="hover:text-[#F2E8B3] transition-colors duration-300">Coleção</a></li>
              <li><a href="#contato" className="hover:text-[#F2E8B3] transition-colors duration-300">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-bebas text-xl md:text-2xl mb-4 text-[#F2E8B3]">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+5511993590875" className="hover:text-[#F2E8B3] transition-colors duration-300">(11) 99359-0875</a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contato@talyta.com" className="hover:text-[#F2E8B3] transition-colors duration-300">contato@talyta.com</a>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 mt-8">
          <p className="text-center text-sm text-[#F2E8B3]/80">
            &copy; {currentYear} Ateliê Talyta Costa. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs text-[#F2E8B3]/60 mt-2">
            Desenvolvido com ❤️ por sua equipe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;