import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import WorkWithUs from './components/WorkWithUs';
import ChatWidget from './components/ChatWidget';

const AppContent: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0f0502] text-white font-sans selection:bg-nova-gold selection:text-nova-dark">
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
        </Routes>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 bg-[#080201] text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Novaça Club. Todos os direitos reservados.</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
