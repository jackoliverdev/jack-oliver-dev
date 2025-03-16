import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [activeDevice, setActiveDevice] = useState(0);
  
  // Device showcase with demo screenshots
  const devices = [
    {
      type: 'desktop',
      title: 'Web Applications',
      image: '/images/portfolio/CentrusImage.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: 'mobile',
      title: 'Mobile Apps',
      image: '/images/portfolio/UKLotteryMachines.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: 'tablet',
      title: 'Responsive Interfaces',
      image: '/images/portfolio/ExellDrainage.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  // Rotate through devices
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDevice((prev) => (prev + 1) % devices.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [devices.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-6">
            {/* Pill label */}
            <div className="inline-block px-6 py-2 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full"></div>
              <div className="absolute inset-[2px] rounded-full bg-gray-900/95"></div>
              <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50"></div>
              <span className="relative z-10 text-blue-400 font-medium text-sm tracking-wider">PORTFOLIO</span>
            </div>
            
            {/* Main heading with gradient */}
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">Showcasing my</span><br/>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                best work
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-xl max-w-xl">
              Explore my latest projects spanning web development, mobile apps, and AI integration. 
              Each project represents unique challenges solved with modern technology.
            </p>
            
            {/* Project count indicator */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {devices.map((device, index) => (
                  <div key={index} className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-blue-400 z-10">
                    {device.icon}
                  </div>
                ))}
              </div>
              <span className="text-white font-medium">Multiple platforms, one cohesive vision</span>
            </div>
          </div>
          
          {/* Right Column - Device Showcase */}
          <div className="relative flex items-center justify-end py-16">
            <div className="relative flex justify-center items-center h-[450px] w-full">
              {devices.map((device, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: activeDevice === index ? 1 : 0,
                    x: activeDevice === index ? 0 : 50,
                    zIndex: activeDevice === index ? 10 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    display: activeDevice === index ? 'block' : 'none'
                  }}
                >
                  {/* Device frame */}
                  <div 
                    className={`${
                      device.type === 'mobile' 
                        ? 'w-[240px] h-[450px] rounded-[36px]' 
                        : device.type === 'tablet' 
                          ? 'w-[320px] h-[450px] rounded-[24px]' 
                          : 'w-[450px] h-[300px] rounded-xl'
                    } relative overflow-hidden border-[6px] border-gray-800 bg-gray-900 shadow-xl`}
                  >
                    {/* Device notch for mobile */}
                    {device.type === 'mobile' && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl z-10"></div>
                    )}
                    
                    {/* Browser chrome for desktop */}
                    {device.type === 'desktop' && (
                      <div className="h-6 bg-gray-800 flex items-center px-3">
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Screenshot */}
                    <div className={`${device.type === 'desktop' ? 'h-[calc(100%-24px)]' : 'h-full'} overflow-hidden relative`}>
                      <img 
                        src={device.image} 
                        alt={device.title}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: device.type === 'mobile' ? 'top' : '50% 0%'
                        }}
                      />
                      
                      {/* Device title */}
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <div className="inline-block px-3 py-1 bg-gray-900/70 backdrop-blur-sm text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                          {device.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header; 