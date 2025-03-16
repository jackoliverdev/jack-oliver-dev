import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Solid background behind everything */}
      <div className="fixed inset-0 bg-gray-950 pointer-events-none" style={{ zIndex: -10 }}></div>
      
      {/* Stars and top atmosphere effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -5 }}>
        {/* Enhanced stars - across the full height */}
        <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
          {/* Small twinkling stars - static group */}
          {Array.from({ length: 80 }).map((_, i) => (
            <div 
              key={`small-static-star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `starTwinkle ${Math.random() * 5 + 2}s ease-in-out infinite alternate`,
              }}
            ></div>
          ))}
          
          {/* Small twinkling stars - moving group */}
          {Array.from({ length: 70 }).map((_, i) => (
            <div 
              key={`small-moving-star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `starTwinkle ${Math.random() * 5 + 2}s ease-in-out infinite alternate, starFloat ${Math.random() * 35 + 25}s ease-in-out infinite alternate`,
              }}
            ></div>
          ))}
          
          {/* Medium stars with more pronounced twinkling */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={`medium-star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 2}px`,
                height: `${Math.random() * 2 + 2}px`,
                opacity: Math.random() * 0.6 + 0.3,
                animation: `starPulse ${Math.random() * 7 + 4}s ease-in-out infinite alternate, starFloat ${Math.random() * 20 + 10}s ease-in-out infinite alternate`,
                boxShadow: `0 0 ${Math.random() * 3 + 1}px rgba(255, 255, 255, 0.5)`
              }}
            ></div>
          ))}
          
          {/* Larger bright stars with glow and movement */}
          {Array.from({ length: 25 }).map((_, i) => (
            <div 
              key={`large-star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                opacity: Math.random() * 0.6 + 0.4,
                animation: `starGlow ${Math.random() * 10 + 8}s ease-in-out infinite, starFloat ${Math.random() * 30 + 15}s ease-in-out infinite alternate`,
                boxShadow: `0 0 ${Math.random() * 6 + 2}px ${Math.random() > 0.7 ? 'rgba(147, 197, 253, 0.8)' : 'rgba(255, 255, 255, 0.7)'}`
              }}
            ></div>
          ))}
          
          {/* Extra large stars that really move around */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={`xlarge-star-${i}`}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 3}px`,
                height: `${Math.random() * 4 + 3}px`,
                background: Math.random() > 0.5 ? 'white' : 'linear-gradient(45deg, #fff, #93c5fd)',
                opacity: Math.random() * 0.7 + 0.5,
                animation: `starGlow ${Math.random() * 8 + 7}s ease-in-out infinite alternate, starFloat ${Math.random() * 25 + 20}s ease-in-out infinite alternate`,
                boxShadow: `0 0 ${Math.random() * 8 + 4}px ${Math.random() > 0.6 ? 'rgba(147, 197, 253, 0.9)' : 'rgba(255, 255, 255, 0.8)'}`,
                zIndex: 1
              }}
            ></div>
          ))}
          
          {/* Shooting stars occasionally */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={`shooting-star-${i}`}
              className="absolute bg-white shooting-star"
              style={{
                top: `${Math.random() * 60}%`, // Keep shooting stars in the top portion
                left: `${Math.random() * 100}%`,
                width: '2px',
                height: '2px',
                opacity: 0,
                animation: `shootingStar ${Math.random() * 15 + 20}s linear ${Math.random() * 10}s infinite`,
                boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.5)'
              }}
            ></div>
          ))}
          
          {/* Dramatic shooting stars with trails */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={`big-shooting-star-${i}`}
              className="absolute bg-gradient-to-r from-white to-transparent"
              style={{
                top: `${Math.random() * 50}%`,
                left: `${Math.random() * 70}%`,
                width: '3px',
                height: '3px',
                opacity: 0,
                animation: `bigShootingStar ${Math.random() * 30 + 40}s linear ${Math.random() * 15}s infinite`,
                boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.6)',
                zIndex: 2
              }}
            ></div>
          ))}
        </div>
        
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-gray-900 to-transparent"></div>
        
        {/* Top atmospheric glow */}
        <div className="absolute top-0 left-1/4 w-2/3 h-[400px] rounded-full bg-blue-600/5 blur-[100px] opacity-60"></div>
        
        {/* Planet horizon at exactly 60vh */}
        <div className="absolute top-[60vh] w-full">
          <div className="relative h-[300px]">
            {/* Main planet curve */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-[800px] rounded-[100%_100%_0_0] bg-gray-950 border-t border-blue-500/10"></div>
            
            {/* Glowing horizon line */}
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent shadow-lg shadow-blue-500/20"></div>
            
            {/* Atmospheric haze above horizon */}
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