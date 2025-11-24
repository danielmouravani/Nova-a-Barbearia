import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-[#0f0502] text-white border-t border-[#1a0b05]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-nova-cream mb-4">
            Venha viver a Experiência Novaça
          </h2>
          <p className="text-nova-gold text-lg font-light">
            Estamos te esperando em nosso espaço moderno e acolhedor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="w-full h-[400px] lg:h-auto rounded-xl overflow-hidden border border-nova-brown shadow-lg relative bg-[#1a0b05]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3285278976035!2d-43.24319892396246!3d-22.679385979414832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9976f168764197%3A0x2857961375c00680!2sR.%20Jata%C3%AD%2C%20Duque%20de%20Caxias%20-%20RJ%2C%2025266-040!5e0!3m2!1sen!2sbr!4v1708635000000!5m2!1sen!2sbr"
              width="100%" 
              height="100%" 
              style={{border:0, filter: 'invert(90%) hue-rotate(180deg)'}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Novaça"
            ></iframe>
            
            {/* Custom Map Label Overlay (Simulating screenshot look) */}
            <div className="absolute top-4 left-4 bg-white text-black p-3 rounded shadow-lg max-w-[250px]">
               <p className="font-bold text-xs uppercase mb-1">R. Jataí, 94-150 - Rio Imbariê</p>
               <p className="text-[10px] text-gray-600">Duque de Caxias - RJ, 25266-040</p>
               <a href="https://www.google.com/maps" target="_blank" className="text-[10px] text-blue-600 mt-1 block hover:underline">Ver mapa ampliado</a>
            </div>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="bg-[#1a0b05] border border-nova-brown rounded-xl p-8 flex items-start gap-6 hover:border-nova-gold transition-colors">
              <div className="p-3 bg-[#2e1209] rounded-full text-nova-gold shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-oswald text-2xl font-bold text-nova-cream mb-2">Endereço</h3>
                <p className="text-nova-gold font-medium text-lg">R. Jataí, 94-150 - Rio Imbariê</p>
                <p className="text-gray-400">Duque de Caxias - RJ, 25266-040</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#1a0b05] border border-nova-brown rounded-xl p-8 flex items-start gap-6 hover:border-nova-gold transition-colors">
              <div className="p-3 bg-[#2e1209] rounded-full text-nova-gold shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-oswald text-2xl font-bold text-nova-cream mb-2">Horário de Funcionamento</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-nova-gold font-medium text-lg">Segunda a Sábado</p>
                    <p className="text-gray-400">das 9h às 19h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-[#1a0b05] border border-nova-brown rounded-xl p-6 flex items-center justify-center gap-3 hover:border-nova-gold transition-colors">
              <span className="text-2xl">💈</span>
              <p className="text-white font-medium text-sm md:text-base">
                Assinantes do Novaça Club têm prioridade no agendamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;