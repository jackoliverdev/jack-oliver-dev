import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Solid background behind everything */}
      <div className="fixed inset-0 bg-gray-950 pointer-events-none" style={{ zIndex: -10 }}></div>
      
      {/* Simplified background - much more performant */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -5 }}>
        {/* Stars - greatly reduced for performance */}
        <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
          {/* Only show stars on desktop */}
          {!isMobile && (
            <>
              {/* Small static stars - reduced count by 75% */}
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={`small-static-star-${i}`}
                  className="absolute rounded-full bg-white"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    opacity: Math.random() * 0.5 + 0.2,
                  }}
                ></div>
              ))}
              
              {/* Medium stars - no animations, reduced count */}
              {Array.from({ length: 15 }).map((_, i) => (
                <div 
                  key={`medium-star-${i}`}
                  className="absolute rounded-full bg-white"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 2 + 2}px`,
                    height: `${Math.random() * 2 + 2}px`,
                    opacity: Math.random() * 0.6 + 0.3,
                  }}
                ></div>
              ))}
              
              {/* Larger bright stars - static, no glow effects */}
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={`large-star-${i}`}
                  className="absolute rounded-full bg-white"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 2}px`,
                    height: `${Math.random() * 3 + 2}px`,
                    opacity: Math.random() * 0.6 + 0.4,
                  }}
                ></div>
              ))}
            </>
          )}
        </div>
        
        {/* Top gradient - simpler, no blur */}
        <div className="absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-gray-900 to-transparent"></div>
        
        {/* Top atmospheric glow - reduced blur amount */}
        <div className="absolute top-0 left-1/4 w-2/3 h-[400px] rounded-full bg-blue-600/5 opacity-60"
             style={{ filter: isMobile ? 'none' : 'blur(60px)' }}></div>
        
        {/* Planet horizon - simplified */}
        <div className="absolute top-[60vh] w-full">
          <div className="relative h-[300px]">
            {/* Main planet curve - simplified */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-[800px] rounded-[100%_100%_0_0] bg-gray-950 border-t border-blue-500/10"></div>
            
            {/* Glowing horizon line - simplified */}
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            
            {/* Atmospheric haze above horizon - simplified, no blur */}
            <div className="absolute top-[1px] left-0 w-full h-[80px] bg-gradient-to-b from-blue-500/5 to-transparent"></div>
          </div>
        </div>
      </div>
      
      <Header />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;