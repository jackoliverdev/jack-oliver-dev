import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function Timeline() {
  // Define process steps
  const steps = [
    {
      id: 'discovery',
      number: '01',
      title: 'Discovery',
      description: 'Understanding your vision, goals, and requirements through in-depth consultation and research.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 20.5c4.694 0 8.5-3.806 8.5-8.5S16.694 3.5 12 3.5 3.5 7.306 3.5 12s3.806 8.5 8.5 8.5z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M18.793 5.207L14.95 9.05M9.05 14.95l-3.843 3.843" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      animationProps: {
        rotate: [0, 360],
        transition: { repeat: Infinity, duration: 20, ease: "linear" }
      }
    },
    {
      id: 'planning',
      number: '02',
      title: 'Planning',
      description: 'Creating detailed project roadmaps, wireframes, and technical specifications to guide development.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      animationProps: {
        y: [0, -3, 0],
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
      }
    },
    {
      id: 'development',
      number: '03',
      title: 'Development',
      description: 'Transforming concepts into code with agile methodologies, regular updates, and iterative improvements.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10l2.5 2.5L15 15M9 15l-2.5-2.5L9 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 12.5l.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 6v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      animationProps: {
        rotate: [0, 5, -5, 0],
        transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
      }
    },
    {
      id: 'testing',
      number: '04',
      title: 'Testing',
      description: 'Rigorous quality assurance across devices and browsers to ensure optimal performance and reliability.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M9 8l-4 4 4 4M15 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      animationProps: {
        x: [0, 3, -3, 0],
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
      }
    },
    {
      id: 'deployment',
      number: '05',
      title: 'Deployment',
      description: 'Seamless launch with continuous integration, thorough documentation, and monitoring systems in place.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4v16m0-16l4 4m-4-4L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 16v4H4v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      animationProps: {
        y: [0, -4, 0],
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
      }
    },
    {
      id: 'support',
      number: '06',
      title: 'Support',
      description: 'Ongoing maintenance, performance optimisation, and strategic updates to keep your project at its best.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 13V9m0 8h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      animationProps: {
        scale: [1, 1.08, 1],
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
      }
    }
  ];

  // Container ref for IntersectionObserver
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  // Trigger the animation when the container is in view
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          {/* Pill label */}
          <div className="inline-block px-6 py-2 rounded-full relative group overflow-hidden mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full shadow-inner"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full shadow-sm"></div>
            <div className="absolute inset-[2px] rounded-full bg-gray-900/95 shadow-inner z-0"></div>
            <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50 z-0"></div>
            <div className="absolute -top-1/2 left-0 right-0 h-1/2 bg-white/10 blur-sm transform rotate-12 translate-y-1 z-0"></div>
            
            <span className="relative z-20 text-blue-400 font-medium text-sm tracking-wider">PROCESS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Development Process</h2>
          
          {/* Underline */}
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-30 blur-sm"></div>
          </div>
          
          <p className="text-gray-300 mx-auto md:whitespace-nowrap md:text-center md:max-w-none lg:text-lg">
            A systematic approach to turning your ideas into reality, with transparency and collaboration at every step.
          </p>
        </div>

        {/* Timeline container */}
        <div ref={ref} className="relative mt-10 mb-16">
          {/* Main horizontal connector - a gradient line */}
          <div className="hidden lg:block absolute h-[2px] top-20 left-[15%] right-[15%] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent z-0"></div>
          
          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative"
                initial="hidden"
                animate={mainControls}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      delay: index * 0.15 
                    }
                  }
                }}
              >
                {/* Step number - small floating badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 z-20 px-2 py-1 rounded-full bg-gray-800/70 backdrop-blur-sm text-xs font-bold text-blue-400 border border-blue-500/30">
                  {step.number}
                </div>
                
                {/* Main card */}
                <motion.div 
                  className="relative rounded-xl overflow-hidden p-6 backdrop-blur-sm border border-gray-700/50 bg-gray-800/30 h-full z-10"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.3)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Arrow connector (except for the last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[3.75rem] right-0 w-8 h-4 z-30">
                      <svg className="w-full h-full" viewBox="0 0 32 16" fill="none">
                        <path d="M0 8H28L22 2M28 8L22 14" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Icon with animation */}
                  <div className="flex justify-center mb-5">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gray-900/90 border border-blue-500/30 flex items-center justify-center">
                        <motion.div 
                          className="text-blue-400"
                          animate={step.animationProps}
                        >
                          {step.icon}
                        </motion.div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-md"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
}

export default Timeline; 