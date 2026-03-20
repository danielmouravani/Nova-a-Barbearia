import React from 'react';
import { PLANS } from '../constants';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="relative py-20 bg-[#0f0502] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-nova-cream mb-4">
            Escolha seu Plano
          </h2>
          <p className="text-nova-gold text-lg font-light">
            Planos mensais com acesso ilimitado. Cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PLANS.map((plan) => {
            return (
              <div 
                key={plan.id} 
                className={`relative bg-[#1a0b05]/80 border ${
                  plan.isPopular ? 'border-nova-gold' : 'border-white/10'
                } rounded-lg p-8 flex flex-col transition-transform hover:scale-[1.02] duration-300 shadow-xl`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nova-gold text-nova-dark text-xs font-bold px-6 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                    MAIS VENDIDO
                  </div>
                )}

                <h3 className="font-oswald text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  {plan.title}
                </h3>

                <div className="flex items-baseline mb-6 border-b border-white/10 pb-6">
                  <span className="text-2xl font-bold text-white mr-1">R$</span>
                  <span className="text-4xl font-oswald font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-gray-400 ml-2">/ Mês</span>
                </div>

                <ul className="w-full space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start text-sm ${feature.included ? 'text-gray-200' : 'text-gray-500'}`}>
                      {feature.included ? (
                        <Check className="w-4 h-4 text-nova-gold mr-3 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? '' : 'line-through opacity-50'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 rounded font-bold uppercase tracking-wider text-sm transition-all ${
                    plan.isPopular 
                      ? 'bg-nova-gold text-nova-dark hover:bg-nova-cream' 
                      : 'bg-[#424242] text-white hover:bg-[#525252]'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;