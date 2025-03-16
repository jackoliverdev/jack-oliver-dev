import React, { useState, useEffect } from 'react';
import Hero from '../components/contact/Hero';
import ContactForm from '../components/contact/ContactForm';
import CalendlyForm from '../components/contact/CalendlyForm';
import FAQ from '../components/contact/FAQ';
import SuccessMessage from '../components/contact/SuccessMessage';

function Contact() {
  // State to track form submission
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Handle successful form submission
  const handleFormSuccess = (data) => {
    setFormData(data);
    setFormSubmitted(true);
    // Scroll to success message
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById('form-section').offsetTop - 100,
        behavior: 'smooth'
      });
    }, 100);
  };
  
  // Handle reset to show form again
  const handleReset = () => {
    setFormSubmitted(false);
    setFormData(null);
  };

  return (
    <div className="pt-32 pb-24 px-4">
      <div className="container mx-auto">
        {/* Hero section */}
        <Hero />
        
        {/* Form section - added more top spacing */}
        <div id="form-section" className="pt-32 pb-16">
          <div className="text-center mb-12">
            {/* Pill label */}
            <div className="inline-block px-6 py-2 rounded-full relative group overflow-hidden mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full shadow-inner"></div>
              <div className="absolute inset-0 bg-white/20 rounded-full shadow-sm"></div>
              <div className="absolute inset-[2px] rounded-full bg-gray-900/95 shadow-inner z-0"></div>
              <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50 z-0"></div>
              <div className="absolute -top-1/2 left-0 right-0 h-1/2 bg-white/10 blur-sm transform rotate-12 translate-y-1 z-0"></div>
              
              <span className="relative z-20 text-blue-400 font-medium text-sm tracking-wider">CONTACT</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Get in Touch</h2>
            
            {/* Underline */}
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-30 blur-sm"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto relative">
            {/* Contact Form Column */}
            <div className="relative h-full min-h-[700px]">
              {formSubmitted && formData ? (
                <SuccessMessage formData={formData} onReset={handleReset} />
              ) : (
                <ContactForm onSubmitSuccess={handleFormSuccess} />
              )}
            </div>
            
            {/* OR Separator - Only visible on desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10">
              <div className="w-px h-24 bg-gray-700"></div>
              <div className="w-12 h-12 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-300 font-semibold my-4">
                OR
              </div>
              <div className="w-px h-24 bg-gray-700"></div>
            </div>

            {/* Mobile-only text separator */}
          <div className="lg:hidden flex items-center justify-center my-8">
            <div className="w-24 h-px bg-gray-700"></div>
            <div className="px-4 text-gray-400 font-medium">OR</div>
            <div className="w-24 h-px bg-gray-700"></div>
          </div>
            
            {/* Calendly Form Column */}
            <div className="relative h-full min-h-[700px]">
              <CalendlyForm />
            </div>
          </div>
          
          
        
        {/* FAQ section */}
        <div className="py-16">
          <FAQ />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact; 