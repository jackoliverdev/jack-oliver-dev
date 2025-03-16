import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.getElementById('services-cta-section'));
    return () => observer.disconnect();
  }, []);

  const services = [
    'Web Design', 
    'Web Development', 
    'Mobile Development', 
    'AI Development'
  ];

  return (
    <div id="services-cta-section" className="py-20 w-full relative">
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
                Ready to Transform Your <span className="text-blue-400">Digital Presence</span>?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                From concept to deployment, I'll work with you to create tailored digital solutions that align with your goals and exceed expectations. Responses within 24-48 hours.
              </motion.p>
              
              {/* Service selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-2 mb-8"
              >
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedService(service)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                      selectedService === service
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                        : 'bg-gray-800/60 text-gray-300 border border-blue-500/10 hover:border-blue-500/30'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </motion.div>
              
              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">Join 50+ satisfied clients who've elevated their digital presence</p>
                <div className="flex justify-center items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-white font-medium">4.9/5</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4"
              >
                {/* Primary button - Schedule Consultation */}
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 shadow-md hover:shadow-blue-500/20"
                >
                  <span>Schedule Consultation</span>
                  <svg 
                    className="ml-2 h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
                
                {/* Secondary button - View Portfolio */}
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center justify-center text-blue-400 bg-transparent hover:bg-blue-600/10 px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 border border-blue-500/30"
                >
                  <span>View Portfolio</span>
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