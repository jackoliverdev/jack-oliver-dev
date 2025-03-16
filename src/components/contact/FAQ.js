import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  // Toggle FAQ item
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // FAQ data
  const faqItems = [
    {
      question: "What information should I include in my project inquiry?",
      answer: "To help me provide the most accurate response, please include details about your project goals, timeline, any specific features or functionality you need, your target audience, and your budget range if possible. The more context you provide, the better I can tailor my response to your needs."
    },
    {
      question: "How does your project process work?",
      answer: "My process typically follows these steps: 1) Initial consultation to understand your needs, 2) Proposal and planning phase, 3) Design and approval, 4) Development with regular updates, 5) Testing and quality assurance, 6) Launch, and 7) Ongoing support as needed. Throughout this process, I maintain clear communication and work collaboratively with my clients."
    },
    {
      question: "What are your payment terms?",
      answer: "I typically work with a 50% deposit to commence work, with the remaining balance due upon project completion. For larger projects, I may suggest a milestone-based payment schedule. I accept payments via bank transfer or major credit cards. All payment terms are clearly outlined in the project contract before work begins."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary significantly based on complexity and scope. A simple website might take 3-4 weeks, while complex web applications can take 3-6 months or more. After our initial consultation, I'll provide a more specific timeline tailored to your project requirements."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, I offer ongoing maintenance and support packages to keep your digital products secure, up-to-date, and performing optimally. These can include regular updates, security monitoring, content updates, and technical support. We can discuss the specific support needs for your project."
    }
  ];
  
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          {/* Pill label */}
          <div className="inline-block px-6 py-2 rounded-full relative group overflow-hidden mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full shadow-inner"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full shadow-sm"></div>
            <div className="absolute inset-[2px] rounded-full bg-gray-900/95 shadow-inner z-0"></div>
            <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50 z-0"></div>
            <div className="absolute -top-1/2 left-0 right-0 h-1/2 bg-white/10 blur-sm transform rotate-12 translate-y-1 z-0"></div>
            
            <span className="relative z-20 text-blue-400 font-medium text-sm tracking-wider">FAQ</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Frequently Asked Questions</h2>
          
          {/* Underline */}
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-30 blur-sm"></div>
          </div>
          
          <p className="text-gray-300 mx-auto md:whitespace-nowrap md:text-center md:max-w-none lg:text-lg">
            Find answers to common questions about working with me. If you don't see your question here, feel free to ask in your message.
          </p>
        </div>
      
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-800/60 rounded-lg overflow-hidden backdrop-blur-sm transition-colors duration-300 hover:border-gray-700/80"
            >
              {/* Question (header) */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-inset"
              >
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <div className={`text-blue-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Answer (content) */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-300 border-t border-gray-800">
                      <p className="pt-4">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ; 