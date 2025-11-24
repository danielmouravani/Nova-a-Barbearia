import React from 'react';
import { PLANS } from '../constants';
import { Check } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            
            return (
              <div 
                key={plan.id} 
                className={`relative bg-[#1a0b05]/80 border ${
                  plan.isPopular ? 'border-nova-gold' : 'border-nova-brown'
                } rounded-lg p-8 flex flex-col items-center transition-transform hover:scale-[1.02] duration-300`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 bg-nova-cream text-nova-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                    <span>👑</span> MAIS POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  {plan.id === 1 && (
                     <div className="text-4xl md:text-6xl mb-2">💈</div>
                  )}
                  {plan.id === 2 && (
                     <div className="text-4xl md:text-6xl mb-2">🧔</div>
                  )}
                  {plan.id === 3 && (
                    <div className="text-4xl md:text-6xl mb-2 text-orange-500">🔥</div>
                  )}
                </div>

                <h3 className="font-oswald text-2xl font-bold text-white mb-2 text-center">
                  {plan.title}
                </h3>

                <div className="flex items-baseline mb-8">
                  <span className="text-xl font-medium text-nova-cream mr-1">R$</span>
                  <span className="text-5xl font-oswald font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-gray-400 ml-1">/mês</span>
                </div>

                <ul className="w-full space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-200">
                      <Check className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 rounded-md font-bold uppercase tracking-wide text-sm transition-all ${
                    plan.buttonVariant === 'cream' 
                      ? 'bg-nova-cream text-nova-dark hover:bg-white' 
                      : 'bg-[#4a1c0e] text-white/90 hover:bg-[#5c2a18]'
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