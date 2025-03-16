import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.getElementById('tech-stack-section'));
    return () => observer.disconnect();
  }, []);

  // Tech categories with their tools
  const technologies = [
    {
      category: "Frontend",
      tools: [
        { name: "HTML", icon: "html.svg" },
        { name: "CSS", icon: "css.svg" },
        { name: "JavaScript", icon: "javascript.svg" },
        { name: "React", icon: "react.svg" },
        { name: "Next.js", icon: "nextjs.svg" },
        { name: "TailwindCSS", icon: "tailwind.svg" },
        { name: "Framer", icon: "framer.svg" }
      ],
      delay: 0.1
    },
    {
      category: "Backend",
      tools: [
        { name: "Node.js", icon: "nodejs.svg" },
        { name: "Python", icon: "python.svg" },
        { name: "MongoDB", icon: "mongodb.svg" },
        { name: "Supabase", icon: "supabase.svg" },
        { name: "Firebase", icon: "firebase.svg" },
        { name: "Stripe", icon: "stripe.svg" }
      ],
      delay: 0.2
    },
    {
      category: "Mobile",
      tools: [
        { name: "React Native", icon: "react-native.svg" },
        { name: "Expo", icon: "expo.svg" },
        { name: "Swift", icon: "swift.svg" }
      ],
      delay: 0.3
    },
    {
      category: "Artificial Intelligence",
      tools: [
        { name: "OpenAI API", icon: "openai.svg" },
        { name: "Lang Chain", icon: "langchain.svg" },
        { name: "Hugging Face", icon: "huggingface.svg" }
      ],
      delay: 0.4
    }
  ];
  
  return (
    <section id="tech-stack-section" className="py-24 px-4 relative z-10">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 blur-[80px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 rounded-full relative group overflow-hidden"
          >
            {/* Glassmorphism effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full shadow-inner"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full shadow-sm"></div>
            <div className="absolute inset-[2px] rounded-full bg-gray-900/95 shadow-inner z-0"></div>
            <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50 z-0"></div>
            <div className="absolute -top-1/2 left-0 right-0 h-1/2 bg-white/10 blur-sm transform rotate-12 translate-y-1 z-0"></div>
            
            <span className="relative z-20 text-blue-400 font-medium text-sm tracking-wider">TECHNOLOGIES</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-3 text-white"
          >
            My Tech Stack
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={isVisible ? { width: "5rem", opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full relative"
          >
            <div className="absolute inset-0 bg-white opacity-30 blur-sm"></div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            These are the technologies and tools I use to bring ideas to life.
          </motion.p>
        </div>
        
        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: tech.delay }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 relative overflow-hidden group"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-3 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
                <div className="absolute top-0 left-0 h-3 w-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-3 h-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
                <div className="absolute bottom-0 right-0 h-3 w-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text"></div>
              </div>
              
              {/* Hover glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition duration-700 z-0"></div>
              
              <h3 className="text-xl font-bold mb-4 text-white relative z-10">{tech.category}</h3>
              
              {/* Tools grid */}
              <div className="flex flex-wrap gap-3">
                {tech.tools.map((tool, toolIndex) => (
                  <div 
                    key={toolIndex} 
                    className="bg-gray-900/80 px-3 py-2 rounded-lg border border-gray-700 flex items-center space-x-2 hover:border-blue-500/50 transition-colors"
                  >
                    {/* Replace the placeholder dots with actual SVG icons */}
                    <div className="w-5 h-5 flex items-center justify-center text-blue-400">
                      <img 
                        src={`/images/tech/${tool.icon}`} 
                        alt={`${tool.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        style={{ filter: "brightness(0) invert(61%) sepia(83%) saturate(3367%) hue-rotate(191deg) brightness(100%) contrast(101%)" }}
                      />
                    </div>
                    <span className="text-sm text-gray-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack; 