import { useEffect } from 'react';

const Favicon = () => {
  useEffect(() => {
    // Cria um canvas para desenhar o favicon redondo
    const canvas = document.createElement('canvas');
    const size = 32; // Tamanho do favicon
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Cria um círculo preenchido
      ctx.beginPath();
      ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
      ctx.fillStyle = '#8C5626'; // Cor marrom do site
      ctx.fill();
      
      // Adiciona a letra T no centro
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('T', size/2, size/2);
      
      // Converte para data URL e define como favicon
      const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (favicon) {
        favicon.href = canvas.toDataURL('image/png');
      } else {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = canvas.toDataURL('image/png');
        document.head.appendChild(link);
      }
    }
  }, []);

  return null;
};

export default Favicon;
