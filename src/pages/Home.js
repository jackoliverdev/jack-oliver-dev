import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedPortfolio from '../components/home/FeaturedPortfolio';
import TechStack from '../components/home/TechStack';
import CTA from '../components/home/CTA';

function Home() {
  // Optional: scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <FeaturedPortfolio />
      <TechStack />
      <CTA />
    </>
  );
}

export default Home; 