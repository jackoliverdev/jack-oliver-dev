import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CalendlyModal from './contact/CalendlyModal';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Load Calendly script
  useEffect(() => {
    // Add Calendly scripts to the document if not already added
    if (!document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      
      document.head.appendChild(script);
      document.head.appendChild(link);
    }
  }, []);

  // Navigation links without the button
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' }
  ];

  const openCalendlyModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}>
        <div className="container mx-auto px-4">
          {/* Three-column layout: Logo, Navigation, CTA */}
          <div className="flex justify-between items-center">
            {/* Column 1: Logo */}
            <div className="flex-shrink-0 relative">
              {/* Background for logo area - tighter fit */}
              <div className="absolute -inset-1 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-lg z-0"></div>
              
              <Link to="/" className="flex items-center group relative z-10">
                <div className="w-10 h-10 rounded bg-gray-900 flex items-center justify-center mr-3 relative overflow-hidden transition-all duration-300 border border-blue-500/30">
                  {/* Corner borders with gradient */}
                  <div className="absolute top-0 left-0 w-5 h-5">
                    <div className="absolute top-0 left-0 w-1 h-4 border-t-2 border-l-2 border-blue-500 rounded-tl-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
                    <div className="absolute top-0 left-0 h-1 w-4 border-t-2 border-l-2 border-blue-500 rounded-tl-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-5 h-5">
                    <div className="absolute bottom-0 right-0 w-1 h-4 border-b-2 border-r-2 border-blue-500 rounded-br-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
                    <div className="absolute bottom-0 right-0 h-1 w-4 border-b-2 border-r-2 border-blue-500 rounded-br-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition duration-700"></div>
                  
                  <span className="font-mono text-blue-400 text-lg font-bold relative z-10">&lt;/&gt;</span>
                </div>
                <div>
                  <h1 className="text-white text-xl font-bold">
                    Jack Oliver <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Dev</span>
                  </h1>
                  <div className="hidden sm:block text-xs tracking-wider text-gray-400">WEB • APP • AI DEVELOPMENT</div>
                </div>
              </Link>
            </div>
            
            {/* Column 2: Centered Navigation Pill */}
            <div className="hidden md:flex flex-1 justify-center items-center px-4">
              <div className="relative">
                {/* Pill Background */}
                <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-full border border-gray-700/50 shadow-md"></div>
                
                {/* Navigation Links */}
                <nav className="relative z-10 flex px-2 py-2">
                  <ul className="flex items-center">
                    {navLinks.map((link, index) => (
                      <li key={link.path + index} className="px-2">
                        <Link 
                          to={link.path} 
                          className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full relative ${
                            location.pathname === link.path 
                              ? 'text-blue-400 font-semibold' 
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          {link.label}
                          {location.pathname === link.path && (
                            <span className="absolute bottom-0.5 left-1/2 w-2/3 h-0.5 bg-blue-500 transform -translate-x-1/2 rounded-full shadow-glow animate-underlineExpand"></span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Column 3: CTA Button or Mobile Menu Toggle */}
            <div className="flex-shrink-0">
              {/* Desktop CTA Button */}
              <div className="hidden md:block">
                <button 
                  onClick={openCalendlyModal}
                  className="px-5 py-2 text-sm font-medium rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                >
                  Book a Call
                </button>
              </div>
              
              {/* Mobile Menu Button - IMPROVED STYLING */}
              <button 
                className="md:hidden p-3 bg-gray-800/90 backdrop-blur-md rounded-lg border border-gray-700/60 focus:outline-none text-gray-300 shadow-lg transition-all duration-200 hover:bg-gray-700/90" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between items-center">
                  <span className={`w-6 h-0.5 bg-blue-400 rounded-full transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                  <span className={`w-6 h-0.5 bg-blue-400 rounded-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`w-6 h-0.5 bg-blue-400 rounded-full transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu - IMPROVED STYLING */}
          <div className={`md:hidden transition-all duration-300 px-4 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-gray-900/100 backdrop-blur-md rounded-xl border border-gray-700/80 shadow-xl overflow-hidden">
              <nav className="px-4 py-3">
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path} 
                        className={`block py-3 px-4 rounded-lg font-medium ${
                          location.pathname === link.path 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                            : 'text-white hover:text-blue-400 hover:bg-gray-800'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-700/80">
                  <button 
                    onClick={openCalendlyModal}
                    className="block w-full text-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/20"
                  >
                    Book a Call
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      
      {/* Calendly Modal */}
      <CalendlyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Header; 