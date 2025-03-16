import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function BlogHeader() {
  const [activeArticle, setActiveArticle] = useState(0);
  
  // Blog article showcase
  const articles = [
    {
      title: 'Modern Web Development',
      category: 'Development',
      excerpt: 'Exploring the latest technologies and methodologies in web development...',
      date: 'June 15, 2023',
      image: '/images/blog/webdev.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'AI in Business Applications',
      category: 'Artificial Intelligence',
      excerpt: 'How businesses are leveraging AI to transform their operations...',
      date: 'May 22, 2023',
      image: '/images/blog/ai.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'The Future of Mobile UX',
      category: 'UX Design',
      excerpt: 'Trends and predictions for the evolving landscape of mobile user experience...',
      date: 'April 10, 2023',
      image: '/images/blog/ux.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  // Rotate through articles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveArticle((prev) => (prev + 1) % articles.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [articles.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-6">
            {/* Pill label */}
            <div className="inline-block px-6 py-2 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-full"></div>
              <div className="absolute inset-[2px] rounded-full bg-gray-900/95"></div>
              <div className="absolute inset-px rounded-full bg-gradient-to-tr from-blue-500/60 via-transparent to-blue-400/60 opacity-50"></div>
              <span className="relative z-10 text-blue-400 font-medium text-sm tracking-wider">BLOG</span>
            </div>
            
            {/* Main heading with gradient */}
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">Thoughts on</span><br/>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                tech & design
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-xl max-w-xl">
              Insights, tutorials and perspectives on web development, 
              AI integration, and creating exceptional digital experiences.
            </p>
            
            {/* Article categories indicator */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {articles.map((article, index) => (
                  <div key={index} className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-blue-400 z-10">
                    {article.icon}
                  </div>
                ))}
              </div>
              <span className="text-white font-medium">Articles across multiple disciplines</span>
            </div>
          </div>
          
          {/* Right Column - Animated Article Cards - Hidden on mobile */}
          <div className="hidden md:flex relative items-center justify-end py-16">
            <div className="relative flex justify-center items-center h-[450px] w-full">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ opacity: 0, x: 50, rotate: 5 }}
                  animate={{ 
                    opacity: activeArticle === index ? 1 : 0,
                    x: activeArticle === index ? 0 : 50,
                    rotate: activeArticle === index ? 0 : 5,
                    zIndex: activeArticle === index ? 10 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    display: activeArticle === index ? 'block' : 'none'
                  }}
                >
                  {/* Article card */}
                  <div className="w-[350px] bg-gray-800/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700 shadow-xl">
                    {/* Article image */}
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-blue-900/30 z-10"></div>
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-blue-500/90 text-white text-xs rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Article content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">{article.excerpt}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-blue-400 text-sm">{article.date}</span>
                        <button className="text-white bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/20 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                  
                  <motion.div 
                    className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-400/10 rounded-full" 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, -180, -360],
                    }}
                    transition={{ 
                      duration: 15, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHeader; 