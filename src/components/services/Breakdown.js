import React from 'react';
import { motion } from 'framer-motion';

function Breakdown() {
  // Service data with icons, descriptions and relevant skills
  const services = [
    {
      id: 'web-design',
      title: 'Web Design',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      accentColor: 'from-purple-400 to-pink-500',
      borderColor: 'border-purple-400/30',
      shadowColor: 'shadow-purple-500/20',
      iconBg: 'bg-purple-500/10',
      description: 'Creating stunning, intuitive interfaces that captivate users and enhance brand identity. Combining aesthetics with functionality to deliver memorable web experiences.',
      skills: ['Figma', 'UI/UX', 'Responsive Design', 'Wireframing', 'Prototyping', 'Accessibility']
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      accentColor: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-400/30',
      shadowColor: 'shadow-blue-500/20',
      iconBg: 'bg-blue-500/10',
      description: 'Building robust, scalable web applications with clean, maintainable code. Leveraging modern technologies to create performant solutions that drive business growth.',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs', 'GraphQL']
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      accentColor: 'from-emerald-400 to-teal-500',
      borderColor: 'border-emerald-400/30',
      shadowColor: 'shadow-emerald-500/20',
      iconBg: 'bg-emerald-500/10',
      description: 'Crafting native and cross-platform mobile applications that deliver seamless experiences across devices. Focus on performance, usability, and offline capabilities.',
      skills: ['React Native', 'iOS', 'Android', 'Flutter', 'Mobile UI/UX', 'Push Notifications', 'App Store Optimisation']
    },
    {
      id: 'ai-development',
      title: 'AI Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z M12 11l2 2 4-4" />
        </svg>
      ),
      accentColor: 'from-amber-400 to-orange-500',
      borderColor: 'border-amber-400/30',
      shadowColor: 'shadow-amber-500/20',
      iconBg: 'bg-amber-500/10',
      description: 'Integrating intelligent solutions using machine learning and AI technologies. From predictive analytics to natural language processing and computer vision applications.',
      skills: ['TensorFlow', 'PyTorch', 'NLP', 'Machine Learning', 'Data Processing', 'GPT Integration', 'OpenAI API', 'Chatbots']
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
            
            <span className="relative z-20 text-blue-400 font-medium text-sm tracking-wider">SPECIALISED</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Specialised Services</h2>
          
          {/* Underline */}
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-30 blur-sm"></div>
          </div>
          
          <p className="text-gray-300 mx-auto md:whitespace-nowrap md:text-center md:max-w-none lg:text-lg">
            Comprehensive solutions tailored to your specific needs, leveraging cutting-edge technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.2 }
              }}
              className={`relative rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300
                border ${service.borderColor} hover:${service.shadowColor} hover:shadow-xl
                bg-gradient-to-b from-gray-900/90 to-gray-800/90`}
            >
              {/* Card Content */}
              <div className="p-6 h-full flex flex-col">
                {/* Icon at the top */}
                <div className={`w-16 h-16 rounded-full ${service.iconBg} flex items-center justify-center mb-5 text-blue-400`}>
                  {service.icon}
                </div>
                
                {/* Title with gradient */}
                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${service.accentColor} bg-clip-text text-transparent`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-5 flex-grow">
                  {service.description}
                </p>
                
                {/* Skills as tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.skills.slice(0, 5).map((skill, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded-full bg-gray-800/80 text-${service.accentColor.split(' ')[1].split('-')[0]}-400 border border-${service.accentColor.split(' ')[1].split('-')[0]}-500/20`}
                    >
                      {skill}
                    </span>
                  ))}
                  {service.skills.length > 5 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-gray-400">
                      +{service.skills.length - 5} more
                    </span>
                  )}
                </div>
              </div>
              
              {/* Subtle accent bar at bottom */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accentColor}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Breakdown; 