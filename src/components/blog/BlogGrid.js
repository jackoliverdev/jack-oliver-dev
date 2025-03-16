import React from 'react';
import { Link } from 'react-router-dom';

// Blog posts data
const blogPosts = [
  {
    id: 'modern-javascript-features',
    title: 'Essential Modern JavaScript Features Every Developer Should Know',
    excerpt: 'Exploring the most useful JavaScript features introduced in recent years and how they can improve your code quality and productivity.',
    date: 'June 15, 2023',
    author: 'Jack Oliver',
    readTime: '8 min read',
    category: 'Development',
    thumbnail: '/images/blog/javascript.jpg'
  },
  {
    id: 'ai-in-web-dev',
    title: 'How AI is Transforming Web Development',
    excerpt: 'From code generation to design assistance, artificial intelligence is revolutionizing how we build websites and applications.',
    date: 'May 22, 2023',
    author: 'Jack Oliver',
    readTime: '10 min read',
    category: 'AI',
    thumbnail: '/images/blog/ai-webdev.jpg'
  },
  {
    id: 'responsive-design-best-practices',
    title: 'Responsive Design Best Practices for 2023',
    excerpt: 'Creating truly responsive experiences across all device types with modern CSS techniques and frameworks.',
    date: 'April 10, 2023',
    author: 'Jack Oliver',
    readTime: '7 min read',
    category: 'Design',
    thumbnail: '/images/blog/responsive.jpg'
  },
  // Add more blog posts as needed
];

function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id}>
          <div className="group bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col border border-gray-700/80 hover:border-blue-500/30">
            <div className="relative h-48">
              <div className="absolute inset-0 overflow-hidden">
                {/* Featured image */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/70 z-10"></div>
                
                {/* Subtle glow effect */}
                <div className="absolute -inset-[40%] bg-blue-500/10 rounded-full blur-3xl z-0 opacity-50"></div>
                
                {/* Image */}
                <img 
                  src={post.thumbnail || '/images/blog/default.jpg'}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Category tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-blue-600/90 text-white text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col z-10">
              <h2 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
              
              <div className="mt-auto flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                
                <span className="text-gray-400 text-sm">{post.date}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogGrid; 