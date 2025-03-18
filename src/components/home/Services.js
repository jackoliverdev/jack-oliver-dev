import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      id: 'web',
      icon: 'code',
      title: 'Web Development',
      description: 'Crafting responsive, intuitive websites and web applications with cutting-edge technologies and exceptional UX design. Happy to take on any project from service website to SaaS.'
    },
    {
      id: 'app',
      icon: 'smartphone',
      title: 'App Development',
      description: 'Building seamless, cross-platform mobile applications that provide exceptional user experiences with optimal performance. Specialising in iOS and React Native.'
    },
    {
      id: 'ai',
      icon: 'bot',
      title: 'AI Development',
      description: 'Implementing Artificial Intelligence to custom applications, workflows and use cases. LLMs, Chatbot and RAG expertise to transform your digital products.'
    }
  ];

  return (
    <section id="services-section" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full shadow-inner"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full shadow-sm"></div>
            <div className="absolute inset-[2px] rounded-full bg-gray-900/95 shadow-inner z-0"></div>
            <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50 z-0"></div>
            <div className="absolute -top-1/2 left-0 right-0 h-1/2 bg-white/10 blur-sm transform rotate-12 translate-y-1 z-0"></div>
            
            <span className="relative z-20 text-blue-400 font-medium text-sm tracking-wider">SERVICES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
            What I Do
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-30 blur-sm"></div>
          </div>
          
          <p className="text-gray-300 mx-auto md:whitespace-nowrap md:text-center md:max-w-none lg:text-lg">
            Create exceptional digital experiences where innovative design meets powerful functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative px-6 py-8 rounded-2xl overflow-hidden shadow-service-card h-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm z-0"></div>
              
              <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[2px] z-0"></div>
              
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-0"></div>
              
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-3 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
                <div className="absolute top-0 left-0 h-3 w-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-3 h-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
                <div className="absolute bottom-0 right-0 h-3 w-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
              </div>

              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-700 z-0"></div>
              
              <div className="relative z-10 mb-4 inline-flex items-center justify-center p-3 rounded-lg bg-blue-500/10 backdrop-blur-sm">
                {service.icon === 'code' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {service.icon === 'smartphone' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )}
                {service.icon === 'bot' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )}
              </div>
              
              <div className="relative z-10 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="text-blue-400 border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors duration-300 px-8 py-3 rounded-md inline-flex items-center group"
          >
            <span>View All Services</span>
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
    </section>
  );
}

export default Services;