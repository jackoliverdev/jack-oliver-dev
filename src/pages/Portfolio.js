import React, { useEffect } from 'react';
import Header from '../components/portfolio/Header';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';

function Portfolio() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-4">
      <div className="container mx-auto">
        {/* Header section with animation */}
        <Header />
        
        {/* Portfolio grid */}
        <div className="mt-24 mb-12">
          <PortfolioGrid />
        </div>
      </div>
    </div>
  );
}

export default Portfolio; 