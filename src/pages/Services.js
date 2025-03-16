import React, { useEffect } from 'react';
import Hero from '../components/services/Hero';
import Breakdown from '../components/services/Breakdown';
import Timeline from '../components/services/Timeline';
import CaseStudies from '../components/services/CaseStudies';
import CTA from '../components/services/CTA';

function Services() {
  // Scroll to top on page load for better UX
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-4">
      <div className="container mx-auto">
        {/* Hero section */}
        <Hero />
        
        {/* Service breakdown section */}
        <Breakdown />
        
        {/* Process timeline section */}
        <Timeline />
        
        {/* Case studies section */}
        <CaseStudies />
        
        {/* Call to action section */}
        <CTA />
      </div>
    </div>
  );
}

export default Services; 