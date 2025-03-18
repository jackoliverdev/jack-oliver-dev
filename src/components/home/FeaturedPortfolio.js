import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedPortfolio() {
  const projects = [
    {
      id: 'centrus-ai',
      title: 'Centrus AI',
      description: 'An AI-powered analytics platform that provides actionable insights for enterprise businesses, featuring real-time data visualization and predictive analytics.',
      tags: ['React', 'Node.js', 'OpenAI', 'Supabase', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      imageUrl: '/images/portfolio/CentrusImage.png',
      featured: true,
      url: 'centrus.ai'
    },
    {
      id: 'uk-lottery',
      title: 'UK Lottery Machines',
      description: 'A comprehensive digital platform for managing lottery machines across the UK, including real-time monitoring, maintenance scheduling, and revenue tracking.',
      tags: ['Vue.js', 'Django', 'PostgreSQL', 'WebSockets'],
      imageUrl: '/images/portfolio/UKLotteryMachines.png',
      featured: true,
      url: 'lotterymachines.co.uk'
    },
    {
      id: 'exell-drainage',
      title: 'Exell Drainage',
      description: 'A complete business management solution for a drainage company, featuring customer management, service scheduling, automated invoicing, and field worker mobile app.',
      tags: ['React Native', 'Firebase', 'Stripe API', 'Google Maps'],
      imageUrl: '/images/portfolio/ExellDrainage.png',
      featured: true,
      url: 'www.exelldrainage.co.uk'
    }
  ];

  return (
    <div id="portfolio-section" className="py-24 px-4" style={{ position: 'relative', zIndex: 10, background: 'transparent' }}>
      <div className="container mx-auto max-w-6xl" style={{ position: 'relative' }}>
        {/* Title Section */}
        <div className="text-center mb-16">
          {/* Portfolio Pill */}
          <div className="inline-block px-6 py-2 rounded-full relative group overflow-hidden">
            {/* Glassmorphism effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full shadow-inner"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full shadow-sm"></div>
            <div className="absolute inset-[2px] rounded-full bg-gray-900/95 shadow-inner z-0"></div>
            <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50 z-0"></div>
            <div className="absolute -top-1/2 left-0 right-0 h-1/2 bg-white/10 blur-sm transform rotate-12 translate-y-1 z-0"></div>
            
            <span className="relative z-20 text-blue-400 font-medium text-sm tracking-wider">PORTFOLIO</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
            Recent Projects
          </h2>
          
          {/* Divider */}
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"
            style={{ position: 'relative' }}>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 mx-auto md:whitespace-nowrap md:text-center md:max-w-none lg:text-lg">
            Explore some of my featured work, showcasing my expertise in web, mobile, and AI development.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden shadow-xl h-full border border-gray-800/80 ${
                project.id === 'centrus-ai' ? 'relative' : ''
              }`}
              style={{ background: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(4px)' }}
            >
              {/* Special styling for browser-framed projects */}
              {project.featured ? (
                <div className="relative h-48">
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/70 z-10"></div>
                    
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-[40%] bg-blue-500/10 rounded-full blur-3xl z-0 opacity-50"></div>
                    
                    {/* Mock browser frame */}
                    <div className="absolute inset-0 rounded-t-lg bg-gray-800 border border-gray-700 overflow-hidden shadow-2xl z-5">
                      {/* Browser header */}
                      <div className="h-6 bg-gray-900 flex items-center px-3">
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-4 px-2 py-0.5 bg-gray-800 rounded text-xs text-gray-400 flex items-center">
                          <span className="mx-auto">{project.url}</span>
                        </div>
                      </div>
                      
                      {/* Screenshot with better positioning */}
                      <div className="relative h-[calc(100%-24px)] overflow-hidden">
                        <img 
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full object-cover transition-all duration-4000 hover:translate-y-[-10%]"
                          style={{
                            objectPosition: '50% 15%',
                            height: '110%',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Regular project image (for non-featured projects)
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-1"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                  />
                </div>
              )}
              
              {/* Project Content */}
              <div className="p-6 relative z-2">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 rounded-full text-blue-400 border border-blue-500/20"
                      style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <Link 
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-blue-400 font-medium"
                >
                  <span className="border-b border-transparent hover:border-blue-500 transition-all duration-300">
                    View Project
                  </span>
                  <svg 
                    className="ml-2 h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/portfolio"
            className="text-blue-400 border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors duration-300 px-8 py-3 rounded-md inline-flex items-center group"
          >
            <span>View All Projects</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPortfolio;