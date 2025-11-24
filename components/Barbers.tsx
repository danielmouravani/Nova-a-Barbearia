import React from 'react';
import { BARBERS } from '../constants';

const Barbers: React.FC = () => {
  return (
    <section id="barbeiros" className="py-20 bg-[#0f0502] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-nova-cream mb-4">
            Conheça nossos Barbeiros
          </h2>
          <p className="text-nova-gold text-lg font-light">
            Os melhores profissionais da cidade prontos para te atender
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {BARBERS.map((barber) => (
            <div 
              key={barber.id}
              className="group relative bg-[#1a0b05] border border-nova-brown rounded-xl overflow-hidden hover:border-nova-gold transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img 
                  src={barber.image} 
                  alt={barber.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b05] via-[#1a0b05]/20 to-transparent opacity-90"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 pb-5">
                <h3 className="font-oswald text-2xl font-bold text-white mb-2 drop-shadow-md">
                  {barber.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;