import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = '', size = 24 }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a delay before showing the button to prevent flash of content
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Check if mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const buttonClasses = `
    fixed z-50 rounded-full flex items-center justify-center shadow-lg
    bg-gradient-to-br from-[#F2E8B3] via-[#D9B36C] to-[#8C5626]
    transition-all duration-300 ease-in-out
    ${isHovered ? 'from-[#D9B36C] to-[#A6783F] scale-110 shadow-xl' : 'shadow-md'}
    ${isVisible ? 'opacity-100' : 'opacity-0'}
    ${isMobile ? 'w-14 h-14 bottom-6 right-6' : 'w-16 h-16 bottom-8 right-8'}
  `;

  const iconSize = isMobile ? 28 : 32;
  const pulseSize = isMobile ? 12 : 16;

  return (
    <>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        aria-label="Fale conosco pelo WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          // Add any click tracking here if needed
          // e.preventDefault();
          // window.open(WHATSAPP_LINK, '_blank');
        }}
      >
        <div className="relative">
          {/* Animated pulse effect */}
          <div className={`
            absolute -inset-1 bg-[#F2E8B3] rounded-full
            animate-ping opacity-75
            ${isHovered ? 'opacity-0' : 'opacity-75'}
          `}></div>
          
          {/* WhatsApp icon */}
          <WhatsAppIcon 
            className="text-white relative z-10" 
            size={iconSize}
          />
        </div>
      </a>
      
      {/* Tooltip - only show on desktop */}
      {!isMobile && (
        <div className={`
          fixed z-40 bg-black/80 text-white text-sm font-bebas tracking-wider
          py-1.5 px-3 rounded-full whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          ${isMobile ? 'right-20 bottom-6' : 'right-24 bottom-9'}
        `}>
          Fale conosco
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
