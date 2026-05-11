import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Barbers from './components/Barbers';
import Location from './components/Location';
import WorkWithUs from './components/WorkWithUs';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  useEffect(() => {
    // Handle initial hash in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure rendering is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0502] text-white font-sans selection:bg-nova-gold selection:text-nova-dark">
      <Header />
      
      <main>
        <Hero />
        <Pricing />
        <Barbers />
        <Location />
        <WorkWithUs />
      </main>

      {/* Simple Footer */}
      <footer className="py-8 bg-[#080201] text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Novaça Club. Todos os direitos reservados.</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;