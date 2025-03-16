import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ContactForm({ onSubmitSuccess }) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Service options
  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'web-design', label: 'Web Design' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'ai-development', label: 'AI Development' },
    { value: 'other', label: 'Other (please specify in message)' }
  ];
  
  // Budget options
  const budgetOptions = [
    { value: '', label: 'Select a budget range' },
    { value: '<5k', label: 'Less than £5,000' },
    { value: '5k-10k', label: '£5,000 - £10,000' },
    { value: '10k-25k', label: '£10,000 - £25,000' },
    { value: '25k-50k', label: '£25,000 - £50,000' },
    { value: '50k+', label: '£50,000+' },
    { value: 'not-sure', label: 'Not sure / To be discussed' }
  ];
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        message: ''
      });
      
      // Show success message
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({ 
        ...prev, 
        form: 'There was an error submitting your message. Please try again.' 
      }));
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="relative h-full">
      {/* Form card with glass effect */}
      <div className="rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50 bg-gray-800/30 h-full relative">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
          
          {/* Error message */}
          {errors.form && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300">
              {errors.form}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-gray-300 font-medium mb-2"
                >
                  Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700 bg-gray-900/70'} text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
                )}
              </div>
              
              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-gray-300 font-medium mb-2"
                >
                  Email <span className="text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700 bg-gray-900/70'} text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Service */}
              <div>
                <label 
                  htmlFor="service" 
                  className="block text-gray-300 font-medium mb-2"
                >
                  Service <span className="text-blue-400">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.service ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700 bg-gray-900/70'} text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors appearance-none bg-no-repeat`}
                  style={{ 
                    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundSize: "1.5em 1.5em"
                  }}
                >
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-gray-900">
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-red-400 text-sm">{errors.service}</p>
                )}
              </div>
              
              {/* Budget */}
              <div>
                <label 
                  htmlFor="budget" 
                  className="block text-gray-300 font-medium mb-2"
                >
                  Budget (Optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900/70 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors appearance-none bg-no-repeat"
                  style={{ 
                    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundSize: "1.5em 1.5em"
                  }}
                >
                  {budgetOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-gray-900">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Message */}
            <div className="mb-6">
              <label 
                htmlFor="message" 
                className="block text-gray-300 font-medium mb-2"
              >
                Message <span className="text-blue-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700 bg-gray-900/70'} text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors resize-y min-h-[120px]`}
                placeholder="Tell me about your project..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
              )}
            </div>
            
            {/* Privacy note */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm">
                By submitting this form, you agree to the storage and handling of your data in accordance with our privacy policy.
              </p>
            </div>
            
            {/* Submit button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="text-blue-400 border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors duration-300 px-8 py-3 rounded-md inline-flex items-center group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </motion.button>
          </form>
        </div>
        
        {/* Corner decorations - Added to match CalendlyForm */}
        <div className="absolute top-0 left-0 w-12 h-12">
          <div className="absolute top-0 left-0 w-3 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
          <div className="absolute top-0 left-0 h-3 w-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-12 h-12">
          <div className="absolute bottom-0 right-0 w-3 h-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
          <div className="absolute bottom-0 right-0 h-3 w-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl z-0"></div>
    </div>
  );
}

export default ContactForm; 