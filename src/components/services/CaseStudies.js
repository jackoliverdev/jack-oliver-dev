import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Animated counter component
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(target);
      const increment = end / (duration * 60); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setCount(Math.floor(start));
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

function CaseStudies() {
  // Case studies data
  const caseStudies = [
    {
      id: 'ai-saas',
      name: 'AI SaaS',
      title: 'Centrus AI',
      url: 'centrus.ai',
      image: '/images/portfolio/CentrusImage.png',
      challenge: 'A financial services firm needed to process vast amounts of market data and present actionable insights to traders in real-time.',
      solution: 'Developed an AI-powered analytics platform with custom algorithms to identify market patterns and predict potential trading opportunities.',
      outcome: 'Increased portfolio performance by enabling faster, data-driven decisions.',
      metrics: [
        { id: 'roi', value: '182', label: '% ROI', prefix: '', suffix: '%' },
        { id: 'time', value: '65', label: 'Processing Time Reduction', prefix: '', suffix: '%' },
        { id: 'accuracy', value: '94', label: 'Prediction Accuracy', prefix: '', suffix: '%' }
      ],
      technologies: ['React', 'Python', 'TensorFlow', 'Node.js', 'MongoDB', 'AWS'],
      testimonial: {
        quote: "The analytics platform has completely transformed how our trading team operates. We're seeing market opportunities that we would have missed before and can react much faster with data-driven decisions.",
        author: "Chris Hartney",
        position: "CRO, Centrus AI"
      }
    },
    {
      id: 'e-commerce',
      name: 'E-Commerce',
      title: 'UK Lottery Machines',
      url: 'lotterymachines.co.uk',
      image: '/images/portfolio/UKLotteryMachines.png',
      challenge: 'The UK\'s only manufacturer of lottery machines needed a modern e-commerce platform to showcase their product range and streamline their sales process.',
      solution: 'Built a comprehensive digital platform for managing lottery machines across the UK, including real-time monitoring, maintenance scheduling, and revenue tracking.',
      outcome: 'Dramatically improved the customer experience, leading to increased sales and a more efficient operational workflow.',
      metrics: [
        { id: 'conversion', value: '41', label: 'Conversion Increase', prefix: '+', suffix: '%' },
        { id: 'management', value: '58', label: 'Easier Management', prefix: '+', suffix: '%' },
        { id: 'revenue', value: '2.3', label: 'Revenue Growth', prefix: '', suffix: 'x' }
      ],
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebSockets', 'Stripe', 'AWS'],
      testimonial: {
        quote: "The new platform has revolutionized how we manage our lottery machine inventory and sales process. The real-time tracking features have made our operations significantly more efficient.",
        author: "Kieran Sydes",
        position: "VP Sales, UK Lottery Machines"
      }
    },
    {
      id: 'simple-website',
      name: 'Simple Website',
      title: 'Exell Drainage',
      url: 'exelldrainage.co.uk',
      image: '/images/portfolio/ExellDrainage.png',
      challenge: 'A drainage company needed a modern website and business management system to handle customer inquiries, schedule services, and manage field workers.',
      solution: 'Created a complete business management solution featuring customer management, service scheduling, automated invoicing, and a field worker mobile app.',
      outcome: 'Streamlined operations and enabled seamless scaling from a small local business to a regional service provider.',
      metrics: [
        { id: 'bookings', value: '67', label: 'Online Booking Increase', prefix: '+', suffix: '%' },
        { id: 'admin', value: '75', label: 'Admin Time Reduction', prefix: '-', suffix: '%' },
        { id: 'coverage', value: '3', label: 'Geographic Coverage', prefix: '', suffix: 'x' }
      ],
      technologies: ['React', 'React Native', 'Firebase', 'Stripe API', 'Google Maps', 'Cloud Functions'],
      testimonial: {
        quote: "This platform has been instrumental in our growth. The automated scheduling and mobile app for our field workers have completely transformed how we operate day-to-day.",
        author: "Mitchell Exell",
        position: "Managing Director, Exell Drainage"
      }
    }
  ];

  // Refs and animation controls for scroll-triggered animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();
  const [activeCase, setActiveCase] = useState(0);

  // Trigger the animation when the container is in view
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          {/* Pill label */}
          <div className="inline-block px-6 py-2 rounded-full relative group overflow-hidden mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full shadow-inner"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full shadow-sm"></div>
            <div className="absolute inset-[2px] rounded-full bg-gray-900/95 shadow-inner z-0"></div>
            <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50 z-0"></div>
            <div className="absolute -top-1/2 left-0 right-0 h-1/2 bg-white/10 blur-sm transform rotate-12 translate-y-1 z-0"></div>
            
            <span className="relative z-20 text-blue-400 font-medium text-sm tracking-wider">PROJECTS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Featured Projects</h2>
          
          {/* Underline */}
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-30 blur-sm"></div>
          </div>
          
          <p className="text-gray-300 mx-auto md:whitespace-nowrap md:text-center md:max-w-none lg:text-lg">
            Explore some of my recent work and see how I've helped clients overcome challenges and achieve their goals.
          </p>
        </div>

        {/* Case selector tabs - Improved design */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-gray-800/50 backdrop-blur-sm p-1.5 border border-blue-500/20">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out ${
                  activeCase === index 
                    ? 'bg-blue-500/20 text-blue-400 shadow-inner' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveCase(index)}
              >
                {caseStudy.name}
              </button>
            ))}
          </div>
        </div>

        {/* Case studies container */}
        <div ref={ref} className="relative mt-8">
          <div className="grid grid-cols-1 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                className={`${activeCase === index ? 'block' : 'hidden'}`}
                initial="hidden"
                animate={mainControls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      staggerChildren: 0.1 
                    }
                  }
                }}
              >
                {/* Testimonial Quote - Floating above */}
                <motion.div
                  className="relative z-20 mx-auto max-w-2xl mb-10"
                  variants={{
                    hidden: { opacity: 0, y: -30 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.6,
                        delay: 0.3
                      }
                    }
                  }}
                >
                  <div className="relative">
                    <div className="absolute -top-3 -left-3 text-blue-500 text-5xl opacity-40">"</div>
                    <div className="absolute -bottom-3 -right-3 text-blue-500 text-5xl opacity-40">"</div>
                    <blockquote className="bg-gray-800/60 backdrop-blur-md p-6 rounded-xl border border-blue-500/20 text-center italic text-gray-300">
                      {caseStudy.testimonial.quote}
                      <footer className="mt-2 text-blue-400 font-medium not-italic">
                        {caseStudy.testimonial.author}, {caseStudy.testimonial.position}
                      </footer>
                    </blockquote>
                  </div>
                </motion.div>

                {/* Main case study card - with browser mockup */}
                <motion.div
                  className="relative z-10 rounded-xl overflow-hidden bg-gray-800/40 backdrop-blur-md border border-blue-500/20"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.5
                      }
                    }
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left column: Browser mockup image */}
                    <div className="relative h-72 lg:h-auto overflow-hidden p-5">
                      {/* Browser Frame - similar to FeaturedPortfolio.js */}
                      <div className="absolute inset-0 rounded-tl-xl bg-gray-800/90 border border-gray-700 overflow-hidden shadow-2xl z-0">
                        {/* Browser header */}
                        <div className="h-8 bg-gray-900 flex items-center px-4">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="ml-4 px-3 py-1 bg-gray-800 rounded text-xs text-gray-400 flex items-center">
                            <span className="mx-auto">{caseStudy.url}</span>
                          </div>
                        </div>
                        
                        {/* Screenshot area */}
                        <div className="relative h-[calc(100%-32px)] overflow-hidden">
                          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10"></div>
                          <img 
                            src={caseStudy.image} 
                            alt={caseStudy.title}
                            className="w-full h-full object-cover transition-all duration-5000 hover:translate-y-[-15%]"
                            style={{ objectPosition: '50% 0%' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right column: Content */}
                    <div className="p-6 lg:p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                      
                      {/* Challenge/Solution/Outcome */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-blue-400 font-medium mb-1">The Challenge</h4>
                          <p className="text-gray-300">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-blue-400 font-medium mb-1">The Solution</h4>
                          <p className="text-gray-300">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-blue-400 font-medium mb-1">The Outcome</h4>
                          <p className="text-gray-300">{caseStudy.outcome}</p>
                        </div>
                      </div>
                      
                      {/* Technologies used */}
                      <div className="mb-6">
                        <h4 className="text-blue-400 font-medium mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics - bottom row */}
                  <div className="grid grid-cols-3 divide-x divide-blue-500/20 border-t border-blue-500/20">
                    {caseStudy.metrics.map((metric) => (
                      <div key={metric.id} className="p-4 text-center">
                        <div className="text-3xl font-bold text-blue-400">
                          {metric.prefix}<Counter target={metric.value} />{metric.suffix}
                        </div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies; 