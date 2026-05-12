import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Instagram, User, Briefcase, Heart, Target, Coffee, TrendingUp, CheckCircle, Loader2 } from 'lucide-react';

const WorkWithUs: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mwvyykzy", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="trabalhe-conosco" className="py-24 pt-32 bg-[#0f0502] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center bg-[#1a0b05] border border-nova-gold p-12 rounded-2xl shadow-2xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <CheckCircle className="w-24 h-24 text-nova-gold mx-auto mb-8" />
            </motion.div>
            <h2 className="font-oswald text-4xl font-bold uppercase text-nova-cream mb-4">Candidatura Enviada!</h2>
            <p className="text-gray-300 text-lg mb-8">
              Valeu demais pelo interesse! Recebemos seus dados e agora vamos analisar com calma. 
              Se o seu perfil bater com o que buscamos, entraremos em contato em breve.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-nova-gold font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-nova-gold pb-1"
            >
              Enviar outro formulário
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="trabalhe-conosco" className="py-24 pt-32 bg-[#0f0502] text-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-oswald text-4xl md:text-5xl font-bold uppercase text-nova-cream mb-6"
          >
            Trabalhe Conosco
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-[#1a0b05] border border-nova-gold/20 p-8 rounded-lg text-left"
          >
            <h3 className="font-oswald text-2xl text-nova-gold mb-4 uppercase">Fala, Barbeiro(a)! Tudo certo?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Seja bem-vindo(a) ao processo de seleção da Barbearia Novaça. Este formulário é a nossa primeira etapa de análise. 
              Queremos conhecer quem está por trás da máquina e da tesoura. Se o seu perfil der 'match' com o nosso, 
              entraremos em contato para um teste prático e conversa presencial.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-nova-dark/50 p-4 rounded border-l-2 border-nova-gold">
                <p className="text-nova-gold font-bold text-sm uppercase mb-2">Dica: Sinta a nossa vibe</p>
                <p className="text-gray-400 text-sm">Dê uma olhada no nosso Instagram e entenda nossa cultura antes de responder.</p>
              </div>
              <div className="bg-nova-dark/50 p-4 rounded border-l-2 border-nova-gold">
                <p className="text-nova-gold font-bold text-sm uppercase mb-2">Dica: Seja autêntico</p>
                <p className="text-gray-400 text-sm">Fuja de respostas curtas. Queremos ver sua vontade e sua história!</p>
              </div>
            </div>
            
            <p className="mt-8 text-nova-cream font-medium italic text-center">
              "Aqui na Novaça, acreditamos que o corte é apenas o meio; o nosso objetivo final é a experiência e a autoestima do cliente."
            </p>
          </motion.div>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          {status === 'error' && (
            <div className="bg-red-900/30 border border-red-500 text-red-200 p-4 rounded-lg mb-8 text-center">
              Ops! Algo deu errado ao enviar. Por favor, tente novamente ou entre em contato via WhatsApp.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* 1. Dados Básicos */}
            <div className="bg-[#1a0b05] border border-nova-brown rounded-xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-8 border-b border-nova-brown pb-4">
                <User className="text-nova-gold w-6 h-6" />
                <h4 className="font-oswald text-xl uppercase tracking-wider text-nova-cream">1. Dados Básicos</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nome Completo *</label>
                  <input 
                    type="text" 
                    name="nome" 
                    required 
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">E-mail *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp *</label>
                  <input 
                    type="tel" 
                    name="whatsapp" 
                    required 
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <Instagram className="w-4 h-4" /> Instagram Profissional *
                  </label>
                  <input 
                    type="text" 
                    name="instagram" 
                    required 
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors"
                    placeholder="@seu.portfolio"
                  />
                </div>
              </div>
            </div>

            {/* 2. Experiência e Trajetória */}
            <div className="bg-[#1a0b05] border border-nova-brown rounded-xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-8 border-b border-nova-brown pb-4">
                <Briefcase className="text-nova-gold w-6 h-6" />
                <h4 className="font-oswald text-xl uppercase tracking-wider text-nova-cream">2. Experiência e Trajetória</h4>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Sua jornada: Qual é a sua trajetória na profissão? (Anteriores, cursos, especializações) *
                  </label>
                  <textarea 
                    name="trajetoria" 
                    required 
                    rows={4}
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors resize-none"
                    placeholder="Conte como começou e onde já passou..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Motivação: O que te chamou atenção na Barbearia Novaça? *
                  </label>
                  <textarea 
                    name="motivacao" 
                    required 
                    rows={3}
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors resize-none"
                    placeholder="Por que quer fazer parte do nosso time?"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    O que você já sabe sobre a Novaça? Já ouviu falar de nós ou frequentou a casa antes?
                  </label>
                  <textarea 
                    name="conhecimento_marca" 
                    rows={2}
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors resize-none"
                    placeholder="Sua relação com a nossa marca..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* 3. Perfil de Atendimento */}
            <div className="bg-[#1a0b05] border border-nova-brown rounded-xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-8 border-b border-nova-brown pb-4">
                <Heart className="text-nova-gold w-6 h-6" />
                <h4 className="font-oswald text-xl uppercase tracking-wider text-nova-cream">3. Perfil de Atendimento</h4>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Como você descreveria o seu estilo de atendimento? (Desde a recepção até o final) *
                  </label>
                  <textarea 
                    name="estilo_atendimento" 
                    required 
                    rows={3}
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors resize-none"
                    placeholder="Fale sobre sua interação com o cliente..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Quem é você (no trabalho e na vida)? Como um colega te descreveria? *
                  </label>
                  <textarea 
                    name="perfil_pessoal" 
                    required 
                    rows={3}
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors resize-none"
                    placeholder="Suas principais características..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Além de cortar e barbear, o que mais te traz satisfação na barbearia? *
                  </label>
                  <textarea 
                    name="proposito" 
                    required 
                    rows={2}
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors resize-none"
                    placeholder="Seu propósito no dia a dia..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* 4. Expectativas e Futuro */}
            <div className="bg-[#1a0b05] border border-nova-brown rounded-xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-8 border-b border-nova-brown pb-4">
                <Target className="text-nova-gold w-6 h-6" />
                <h4 className="font-oswald text-xl uppercase tracking-wider text-nova-cream">4. Expectativas e Futuro</h4>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Quanto ganhava no último trabalho? (Fixo+Comissão)</label>
                    <input 
                      type="text" 
                      name="financeiro_anterior" 
                      className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors"
                      placeholder="Ex: R$ 3.000,00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Quanto deseja alcançar na Novaça? *</label>
                    <input 
                      type="text" 
                      name="financeiro_desejo" 
                      required
                      className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors"
                      placeholder="Sua expectativa aqui"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Quais seus objetivos para os próximos 2 anos? (Profissionais e Pessoais) *</label>
                  <textarea 
                    name="objetivos" 
                    required 
                    rows={3}
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors resize-none"
                    placeholder="Onde quer estar?"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <Coffee className="w-4 h-4" /> O que faz no seu dia de folga para recarregar?
                  </label>
                  <textarea 
                    name="folga" 
                    rows={2}
                    className="w-full bg-nova-dark border border-nova-brown rounded px-4 py-3 text-white focus:border-nova-gold outline-none transition-colors resize-none"
                    placeholder="Seus hobbies e descanso..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* 5. Pitch Final */}
            <div className="bg-[#1a0b05] border border-nova-gold/30 rounded-xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <TrendingUp className="w-32 h-32" />
              </div>
              
              <div className="flex items-center gap-3 mb-8 border-b border-nova-brown pb-4">
                <TrendingUp className="text-nova-gold w-6 h-6" />
                <h4 className="font-oswald text-xl uppercase tracking-wider text-nova-cream">5. O "Pitch" Final</h4>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-nova-gold mb-3 uppercase tracking-widest font-bold">
                    Por que a Barbearia Novaça deve escolher VOCÊ? *
                  </label>
                  <textarea 
                    name="pitch" 
                    required 
                    rows={5}
                    className="w-full bg-nova-dark border border-nova-gold/50 rounded px-4 py-4 text-white focus:border-nova-gold outline-none transition-all shadow-inner placeholder:text-gray-600"
                    placeholder="Convença-nos! O que você traz de único para o nosso time e nossos clientes?"
                  ></textarea>
                </div>

                <div className="bg-nova-dark/80 p-5 rounded border border-nova-brown">
                  <label className="block text-sm font-medium text-nova-gold mb-4 uppercase tracking-wider">
                    Confirmação de Modelo de Trabalho *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name="concordo_parceria" 
                        required 
                        className="w-4 h-4 accent-nova-gold rounded"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors">Entendo que o modelo é Regime de Parceria (Comissão) *</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name="concordo_mei" 
                        required
                        className="w-4 h-4 accent-nova-gold rounded"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors">Possuo MEI ativo ou disponibilidade para abertura *</span>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 italic">
                    Buscamos empreendedores da beleza que queiram crescer junto com a marca Novaça.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="bg-nova-cream text-nova-dark font-oswald text-2xl font-bold px-12 py-5 rounded uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-lg flex items-center gap-4 mx-auto group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    Enviando...
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </>
                ) : (
                  <>
                    Enviar Candidatura
                    <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-gray-500 text-xs mt-4">Ao enviar, você concorda com o processamento dos seus dados para fins de recrutamento.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
