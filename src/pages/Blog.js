import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogHeader from '../components/blog/BlogHeader';

function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  // Blog posts data (matching the IDs in BlogDetail.js)
  const blogPosts = [
    {
      id: 'javascript-features',
      title: 'Essential Modern JavaScript Features Every Developer Should Know',
      excerpt: 'Exploring the most useful JavaScript features introduced in recent years and how they can improve your code.',
      category: 'Development',
      date: 'June 15, 2023',
      readTime: '8 min read',
      coverImage: '/images/blog/javascript-features.jpg'
    },
    {
      id: 'ai-web-development',
      title: 'How AI is Transforming Web Development',
      excerpt: 'From code generation to design assistance, artificial intelligence is revolutionizing how developers build websites and applications.',
      category: 'AI',
      date: 'May 22, 2023',
      readTime: '10 min read',
      coverImage: '/images/blog/ai-web-dev.jpg'
    },
    {
      id: 'responsive-design-practices',
      title: 'Responsive Design Best Practices for 2023',
      excerpt: 'Creating truly responsive experiences across all device types with modern CSS techniques and design strategies.',
      category: 'Design',
      date: 'April 10, 2023',
      readTime: '7 min read',
      coverImage: '/images/blog/responsive-design.jpg'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Blog Header */}
        <BlogHeader />
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Cover image */}
              <Link to={`/blog/${post.id}`} className="block relative h-48 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/10 backdrop-blur-sm text-blue-400 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </Link>
              
              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <Link to={`/blog/${post.id}`} className="block mb-3 group">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex justify-between items-center">
                  <div className="text-gray-400 text-sm">
                    {post.date}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {post.readTime}
                  </div>
                </div>
              </div>
              
              {/* "Read more" link */}
              <div className="px-6 pb-6">
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-500 transition-colors group font-medium"
                >
                  <span className="border-b border-transparent group-hover:border-blue-500 transition-all duration-300">
                    Read article
                  </span>
                  <svg 
                    className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-3 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
                <div className="absolute top-0 left-0 h-3 w-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 right-0 w-3 h-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
                <div className="absolute bottom-0 right-0 h-3 w-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog; 