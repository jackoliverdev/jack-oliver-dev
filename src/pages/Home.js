import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedPortfolio from '../components/home/FeaturedPortfolio';
import TechStack from '../components/home/TechStack';
import CTA from '../components/home/CTA';

function Home() {
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