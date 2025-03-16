import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CalendlyModal({ isOpen, onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Load Calendly widget when modal opens
  useEffect(() => {
    if (isOpen && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/jackoliverdev/30min',
        parentElement: document.getElementById('calendly-container'),
        prefill: {},
        utm: {}
      });
    }
  }, [isOpen]);

  // Handle click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 500 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900/90 backdrop-blur-xl shadow-2xl"
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-3 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
              <div className="absolute top-0 left-0 h-3 w-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-3 h-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
              <div className="absolute bottom-0 right-0 h-3 w-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
            </div>
            
            {/* Modal header */}
            <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Schedule a Call</h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal body - Calendly will load here */}
            <div className="w-full h-[calc(90vh-70px)] max-h-[750px] overflow-y-auto">
              <div
                id="calendly-container"
                className="min-h-[600px] w-full"
                style={{ height: "100%" }}
              ></div>
            </div>
            
            {/* Subtle glow effects */}
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CalendlyModal; 