import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CalendlyModal from '../contact/CalendlyModal';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Typing animation states
  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const typingSpeed = 10; // ms per character
  const lineDelay = 100; // ms delay between lines
  
  // Full code content
  const codeLines = [
    { text: "const developWebsite = (idea) => {" },
    { text: "  return {" },
    { text: "    design: 'beautiful'," },
    { text: "    strategy: 'business-aligned'," },
    { text: "    technology: 'cutting-edge'," },
    { text: "    performance: 'optimised'," },
    { text: "    ROI: 'exceptional'," },
    { text: "    client: 'satisfied'" },
    { text: "  };" },
    { text: "};" }
  ];

  // Typing effect
  useEffect(() => {
    if (currentLineIndex >= codeLines.length) {
      setIsTypingComplete(true);
      return;
    }

    if (currentText.length < codeLines[currentLineIndex].text.length) {
      // Still typing current line
      const timeout = setTimeout(() => {
        setCurrentText(codeLines[currentLineIndex].text.substring(0, currentText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      // Line complete - move to next line
      const timeout = setTimeout(() => {
        setTypedLines([...typedLines, { text: currentText }]);
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentText('');
      }, lineDelay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentText, typedLines]);

  // Function to apply syntax highlighting
  const getSyntaxHighlightedLine = (text) => {
    return text
      .replace(/const|return/g, '<span class="text-purple-400">$&</span>')
      .replace(/=>/g, '<span class="text-yellow-300">$&</span>')
      .replace(/'[^']*'/g, '<span class="text-green-400">$&</span>')
      .replace(/\{|\}|\(|\)/g, '<span class="text-yellow-300">$&</span>')
      .replace(/design|strategy|technology|performance|ROI|client/g, '<span class="text-orange-400">$&</span>')
      .replace(/:/g, '<span class="text-blue-400">$&</span>');
  };

  const openCalendlyModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="pt-40 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left content - Text */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="inline-block mb-4">
              <div className="inline-block px-6 py-2 rounded-full relative group overflow-hidden">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full shadow-inner"></div>
                <div className="absolute inset-0 bg-white/20 rounded-full shadow-sm"></div>
                <div className="absolute inset-[2px] rounded-full bg-gray-900/95 shadow-inner z-0"></div>
                <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50 z-0"></div>
                <div className="absolute -top-1/2 left-0 right-0 h-1/2 bg-white/10 blur-sm transform rotate-12 translate-y-1 z-0"></div>
                
                <span className="relative z-20 text-blue-400 font-medium text-sm tracking-wider">FULL-STACK DEVELOPER</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              I help founders
              <div>turn <span className="text-blue-400">ideas</span></div>
              <div>into <span className="text-blue-400">reality</span></div>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              Technical expertise paired with business understanding.<br />
              I build products that work for your users and your revenue.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/portfolio" 
                className="btn btn-primary px-8 py-3 rounded-md inline-flex items-center group"
              >
                <span>View My Work</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <button
                onClick={openCalendlyModal}
                className="text-blue-400 border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors duration-300 px-8 py-3 rounded-md inline-flex items-center"
              >
                <span>Schedule a Call</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right content - IDE */}
          <div className="w-full lg:w-1/2">
            {/* Completely redesigned IDE Window */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-blur-sm">
              {/* Browser-like header */}
              <div className="bg-gray-900/80 px-4 py-3 flex items-center border-b border-gray-700/50">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-gray-800/50 rounded-md py-1 px-3 text-xs text-gray-400 flex items-center justify-center">
                  <svg className="w-3 h-3 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                  https://jackoliverdev.co.uk
                </div>
              </div>
              
              {/* New IDE-style content area */}
              <div className="bg-gray-900 text-white font-mono text-sm relative">
                {/* Code editor with grid layout */}
                <div className="grid" style={{ 
                  gridTemplateColumns: "auto 1fr",
                  backgroundImage: "linear-gradient(to right, transparent calc(100% - 1px), rgba(75, 85, 99, 0.3) calc(100% - 1px))"
                }}>
                  {/* Left gutter with line numbers */}
                  <div className="py-5 px-3 text-right text-gray-500 select-none bg-gray-900/80 border-r border-gray-700/30">
                    {codeLines.map((_, index) => (
                      <div key={`line-${index}`} className="h-6">{index + 1}</div>
                    ))}
                  </div>
                  
                  {/* Code content */}
                  <div className="py-5 px-4 relative">
                    {/* Vertical indentation guides */}
                    <div className="absolute h-[190px] w-px bg-gray-700/20 top-[42px] left-[2.1ch]"></div>
                    <div className="absolute h-[130px] w-px bg-gray-700/20 top-[74px] left-[4.1ch]"></div>
                    
                    {/* Completed lines */}
                    {typedLines.map((line, lineIndex) => (
                      <div 
                        key={`typed-${lineIndex}`} 
                        className="h-6 whitespace-pre text-white"
                        style={{ fontFamily: "monospace" }}
                      >
                        <div 
                          dangerouslySetInnerHTML={{ 
                            __html: getSyntaxHighlightedLine(line.text) 
                          }}
                        />
                      </div>
                    ))}
                    
                    {/* Current typing line */}
                    {!isTypingComplete && (
                      <div 
                        className="h-6 whitespace-pre text-white"
                        style={{ fontFamily: "monospace" }}
                      >
                        <div 
                          dangerouslySetInnerHTML={{ 
                            __html: getSyntaxHighlightedLine(currentText) 
                          }}
                        />
                        <span className="inline-block w-2 h-4 bg-blue-400 ml-0.5 animate-pulse"></span>
                      </div>
                    )}
                    
                    {/* Remaining empty lines (for consistent height) */}
                    {Array.from({ length: Math.max(0, codeLines.length - typedLines.length - (isTypingComplete ? 0 : 1)) }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-6">&nbsp;</div>
                    ))}
                  </div>
                </div>
                
                {/* Terminal-like footer */}
                <div className="bg-gray-900/80 px-4 py-2 border-t border-gray-700/50 flex items-center text-xs text-gray-400">
                  <div className="mr-3 w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No errors</span>
                  <div className="ml-auto flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Optimised</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Calendly Modal */}
      <CalendlyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default Hero;