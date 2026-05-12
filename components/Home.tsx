import React, { useEffect } from 'react';
import Hero from './Hero';
import Pricing from './Pricing';
import Barbers from './Barbers';
import Location from './Location';

const Home: React.FC = () => {
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
    <>
      <Hero />
      <Pricing />
      <Barbers />
      <Location />
    </>
  );
};

export default Home;
