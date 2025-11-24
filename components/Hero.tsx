import React from 'react';
import { COMPANY_LOGO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
          alt="Barbershop Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#1a0b05]/70 to-[#0f0502] z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center mt-10">
        {/* Logo Image replacing text */}
        <div className="mb-4 md:mb-8 animate-fade-in-up">
          <img 
            src={COMPANY_LOGO} 
            alt="Novaça" 
            className="h-24 md:h-40 lg:h-48 w-auto object-contain drop-shadow-2xl mx-auto"
          />
        </div>

        <h1 className="text-white font-oswald text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-6 drop-shadow-lg leading-tight">
          O novo conceito de barbearia
        </h1>
        
        <p className="text-nova-gold text-lg md:text-2xl font-light mb-12 tracking-wide">
          Assine o Club e corte quantas vezes quiser
        </p>

        <a 
          href="https://celcash.celcoin.com.br/landingpage6107477/planos"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-nova-cream text-nova-dark font-bold px-8 py-4 rounded-sm text-lg uppercase tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg shadow-nova-gold/10 inline-block"
        >
          Quero entrar pro Novaça Club
        </a>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce text-nova-cream/50">
          <div className="border-2 border-nova-cream/30 rounded-full w-[30px] h-[50px] flex justify-center pt-2">
            <div className="w-1 h-2 bg-nova-cream/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;