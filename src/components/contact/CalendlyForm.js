import React, { useEffect, useState } from 'react';

function CalendlyForm() {
  const [loaded, setLoaded] = useState(false);

  // Initialize Calendly widget when component mounts or becomes visible
  useEffect(() => {
    // Make sure Calendly script is loaded
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = initCalendly;
      document.head.appendChild(script);
      
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    } else {
      initCalendly();
    }
    
    function initCalendly() {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const container = document.getElementById('calendly-inline-container');
        if (container && window.Calendly && !loaded) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/jackoliverdev/30min',
            parentElement: container,
            prefill: {},
            utm: {}
          });
          setLoaded(true);
        }
      }, 300);
    }
    
    // Reinitialize on resize (helps with mobile/desktop transitions)
    window.addEventListener('resize', initCalendly);
    
    return () => {
      window.removeEventListener('resize', initCalendly);
    };
  }, [loaded]);

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden shadow-xl h-full flex flex-col relative">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-white">Schedule a Call</h2>
        <p className="text-gray-300 mt-1 text-sm">
          Pick a time that works for you to discuss your project
        </p>
      </div>
      
      {/* Calendly container */}
      <div className="w-full flex-1 min-h-[500px]">
        <div
          id="calendly-inline-container"
          className="w-full h-full"
        ></div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-12 h-12">
        <div className="absolute top-0 left-0 w-3 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
        <div className="absolute top-0 left-0 h-3 w-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-12 h-12">
        <div className="absolute bottom-0 right-0 w-3 h-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
        <div className="absolute bottom-0 right-0 h-3 w-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
      </div>
    </div>
  );
}

export default CalendlyForm; 