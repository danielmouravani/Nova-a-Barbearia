import React, { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY_LOGO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-nova-dark/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={COMPANY_LOGO} 
            alt="Novaça Logo" 
            className={`${isScrolled ? 'h-8' : 'h-10'} w-auto object-contain transition-all duration-300`}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-white/90 hover:text-nova-gold text-sm font-medium transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a 
          href="https://celcash.celcoin.com.br/landingpage6107477/planos"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-nova-cream text-nova-dark font-bold px-6 py-2 rounded-sm text-sm uppercase tracking-wide hover:bg-white transition-colors"
        >
          Assine o Club
        </a>
      </div>
    </header>
  );
};

export default Header;