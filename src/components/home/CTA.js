import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.getElementById('cta-section'));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="cta-section" className="py-20 w-full relative">
      <div className="container mx-auto max-w-5xl relative px-6">
        {/* Background card with subtle border and gradient */}
        <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-lg">
          {/* Background gradient and effect */}
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm z-0"></div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16">
            <div className="absolute top-0 left-0 w-4 h-10 border-t border-l border-blue-500/50"></div>
            <div className="absolute top-0 left-0 h-4 w-10 border-t border-l border-blue-500/50"></div>
          </div>
          
          <div className="absolute bottom-0 right-0 w-16 h-16">
            <div className="absolute bottom-0 right-0 w-4 h-10 border-b border-r border-blue-500/50"></div>
            <div className="absolute bottom-0 right-0 h-4 w-10 border-b border-r border-blue-500/50"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 py-12 px-8 md:px-14">
            <div className="text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Ready to Bring Your <span className="text-blue-400">Ideas</span> to Life?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Let's collaborate to create exceptional digital experiences that solve real problems and drive business growth.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4"
              >
                {/* Primary button - Get in Touch */}
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-blue-500/20"
                >
                  <span>Get in Touch</span>
                  <svg 
                    className="ml-2 h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
                
                {/* Secondary button - Explore My Work */}
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center justify-center text-blue-400 bg-transparent hover:bg-blue-600/10 px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 border border-blue-500/30"
                >
                  <span>Explore My Work</span>
                  <svg 
                    className="ml-2 h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;