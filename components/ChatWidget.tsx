import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatWidget: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5521969615562?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Nova%C3%A7a%20Barbearia%20e%20tenho%20interesse"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-nova-cream p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-nova-dark" />
    </a>
  );
};

export default ChatWidget;