import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function SuccessMessage({ formData, onReset }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative rounded-xl overflow-hidden backdrop-blur-sm border border-green-500/30 bg-gray-800/30 p-8 text-center"
    >
      {/* Success icon */}
      <motion.div 
        variants={itemVariants} 
        className="mx-auto w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
      >
        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      
      {/* Success message */}
      <motion.h2 variants={itemVariants} className="text-2xl font-bold text-white mb-2">
        Message Sent Successfully!
      </motion.h2>
      
      <motion.p variants={itemVariants} className="text-gray-300 mb-6">
        Thank you for reaching out, {formData.name}. I've received your message about{' '}
        <span className="text-green-400">{formData.service ? serviceLabel(formData.service) : 'your project'}</span>.
        I'll review your inquiry and respond within 24-48 hours.
      </motion.p>
      
      {/* What happens next */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-lg font-medium text-white mb-3">What happens next?</h3>
        <ul className="text-gray-300 space-y-2">
          <li className="flex items-center">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mr-2">1</span>
            I'll review your project requirements in detail
          </li>
          <li className="flex items-center">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mr-2">2</span>
            I'll email you with any clarifying questions or next steps
          </li>
          <li className="flex items-center">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mr-2">3</span>
            We'll schedule a consultation to discuss your project further
          </li>
        </ul>
      </motion.div>
      
      {/* Action buttons */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onReset}
          className="px-6 py-3 border border-blue-500/30 text-blue-400 font-medium rounded-lg hover:bg-blue-500/10 transition-colors duration-200"
        >
          Send Another Message
        </button>
        
        <Link
          to="/portfolio"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200"
        >
          Explore My Work
        </Link>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl z-0"></div>
    </motion.div>
  );
}

// Helper function to get human-readable service label
function serviceLabel(serviceValue) {
  const services = {
    'web-design': 'Web Design',
    'web-development': 'Web Development', 
    'mobile-development': 'Mobile Development',
    'ai-development': 'AI Development',
    'other': 'your project'
  };
  
  return services[serviceValue] || 'your project';
}

export default SuccessMessage; 