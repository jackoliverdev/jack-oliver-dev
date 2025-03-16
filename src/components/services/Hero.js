import React from 'react';

function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Removed the subtle background element that was here */}
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-6">
            {/* Pill label */}
            <div className="inline-block px-6 py-2 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full"></div>
              <div className="absolute inset-[2px] rounded-full bg-gray-900/95"></div>
              <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50"></div>
              <span className="relative z-10 text-blue-400 font-medium text-sm tracking-wider">SERVICES</span>
            </div>
            
            {/* Main heading with gradient */}
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">Expertise that</span><br/>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                delivers results
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-xl max-w-xl">
              Transforming complex requirements into elegant digital solutions. 
              From simple websites to AI-powered SaaS apps, I deliver quality projects.
            </p>
          </div>
          
          {/* Right Column - Service Hub Visualization */}
          <div className="relative h-full flex items-center justify-center p-8 md:p-12">
            {/* Services hub visualization */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central circle - Logo with lighter blue background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-800/60 backdrop-blur-md flex items-center justify-center border border-blue-400/70 z-20">
                <div className="text-blue-400 w-16 h-16">
                  {/* Logo from public directory */}
                  <img src="/logo.svg" alt="Logo" className="w-full h-full" />
                </div>
              </div>
              
              {/* Service Nodes in X pattern with shorter arms */}
              {/* Top-left: Light bulb */}
              <div className="absolute top-[25%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gray-900/80 backdrop-blur-md flex items-center justify-center border border-blue-500/30 z-10">
                <div className="text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              
              {/* Top-right: Desktop */}
              <div className="absolute top-[25%] right-[25%] transform translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gray-900/80 backdrop-blur-md flex items-center justify-center border border-blue-500/30 z-10">
                <div className="text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              {/* Bottom-right: Mobile */}
              <div className="absolute bottom-[25%] right-[25%] transform translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full bg-gray-900/80 backdrop-blur-md flex items-center justify-center border border-blue-500/30 z-10">
                <div className="text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              {/* Bottom-left: Clipboard */}
              <div className="absolute bottom-[25%] left-[25%] transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full bg-gray-900/80 backdrop-blur-md flex items-center justify-center border border-blue-500/30 z-10">
                <div className="text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              
              {/* Enhanced connection lines with flowing animations */}
              <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  {/* Flowing IN connections (to brain) */}
                  
                  {/* Light bulb to Brain (top-left to center) */}
                  <path id="path1" d="M60,60 L100,100" stroke="none" fill="none" />
                  <path d="M60,60 L100,100" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
                  <path d="M60,60 L100,100" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="5,5" strokeDashoffset="0">
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Arrow markers for Light bulb to Brain */}
                  <circle r="2" fill="#3b82f6">
                    <animateMotion 
                      path="M60,60 L100,100" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  <circle r="1.5" fill="#3b82f6">
                    <animateMotion 
                      path="M60,60 L100,100" 
                      dur="1.5s"
                      begin="0.3s"
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  <circle r="1" fill="#3b82f6">
                    <animateMotion 
                      path="M60,60 L100,100" 
                      dur="1.5s"
                      begin="0.6s"
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  
                  {/* Clipboard to Brain (bottom-left to center) */}
                  <path id="path2" d="M60,140 L100,100" stroke="none" fill="none" />
                  <path d="M60,140 L100,100" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
                  <path d="M60,140 L100,100" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="5,5" strokeDashoffset="0">
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Arrow markers for Clipboard to Brain */}
                  <circle r="2" fill="#3b82f6">
                    <animateMotion 
                      path="M60,140 L100,100" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  <circle r="1.5" fill="#3b82f6">
                    <animateMotion 
                      path="M60,140 L100,100" 
                      dur="1.5s"
                      begin="0.4s"
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  <circle r="1" fill="#3b82f6">
                    <animateMotion 
                      path="M60,140 L100,100" 
                      dur="1.5s"
                      begin="0.8s"
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  
                  {/* Flowing OUT connections (from brain) */}
                  
                  {/* Brain to Desktop (center to top-right) */}
                  <path id="path3" d="M100,100 L140,60" stroke="none" fill="none" />
                  <path d="M100,100 L140,60" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
                  <path d="M100,100 L140,60" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="5,5" strokeDashoffset="0">
                    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Arrow markers for Brain to Desktop */}
                  <circle r="2" fill="#3b82f6">
                    <animateMotion 
                      path="M100,100 L140,60" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  <circle r="1.5" fill="#3b82f6">
                    <animateMotion 
                      path="M100,100 L140,60" 
                      dur="1.5s"
                      begin="0.3s"
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  <circle r="1" fill="#3b82f6">
                    <animateMotion 
                      path="M100,100 L140,60" 
                      dur="1.5s"
                      begin="0.6s"
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  
                  {/* Brain to Mobile (center to bottom-right) */}
                  <path id="path4" d="M100,100 L140,140" stroke="none" fill="none" />
                  <path d="M100,100 L140,140" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
                  <path d="M100,100 L140,140" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="5,5" strokeDashoffset="0">
                    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Arrow markers for Brain to Mobile */}
                  <circle r="2" fill="#3b82f6">
                    <animateMotion 
                      path="M100,100 L140,140" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  <circle r="1.5" fill="#3b82f6">
                    <animateMotion 
                      path="M100,100 L140,140" 
                      dur="1.5s"
                      begin="0.4s"
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                  <circle r="1" fill="#3b82f6">
                    <animateMotion 
                      path="M100,100 L140,140" 
                      dur="1.5s"
                      begin="0.8s"
                      repeatCount="indefinite" 
                      rotate="auto"
                    />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 