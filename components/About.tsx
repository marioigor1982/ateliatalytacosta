import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-satisfy text-5xl text-[#A6783F]">Nossa Essência</h2>
          <p className="font-bebas text-2xl text-gray-500 tracking-wider mt-2">Feito com Alma e Natureza</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/img/MKT_2.jpg" 
              alt="Ateliê Talyta Costa" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed font-sans">
            <p className="mb-4">
              Bem-vindo ao Ateliê Talyta Costa, um lugar onde a delicadeza da natureza encontra o brilho eterno das semi-jóias. Cada peça é cuidadosamente confeccionada à mão, transformando sentimentos em acessórios únicos.
            </p>
            <p className="mb-4">
              Nossa especialidade são brincos e colares que carregam um toque mágico: <strong className="text-[#A6783F]">flores naturais desidratadas da espécie sempre-viva</strong>, encapsuladas para preservar sua beleza. É a poesia da natureza eternizada para você.
            </p>
            <p>
              Todas as nossas criações recebem um banho de <strong className="text-[#A6783F]">ouro 18k com 5 milésimos de espessura</strong>, garantindo não apenas um acabamento impecável e duradouro, mas também a qualidade e o valor que você merece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;