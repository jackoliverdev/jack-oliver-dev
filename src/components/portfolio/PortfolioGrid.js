import React from 'react';
import { Link } from 'react-router-dom';

// Portfolio items data
const portfolioItems = [
  {
    id: 'centrus-ai',
    title: 'Centrus AI',
    subtitle: 'Enterprise AI Training & Management Platform',
    thumbnail: '/images/portfolio/CentrusImage.png',
    url: 'app.centrus.ai',
    categories: ['UI/UX Design', 'Web Development', 'AI Integration']
  },
  // Add more portfolio items as needed
];

function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioItems.map((item) => (
        <Link to={`/portfolio/${item.id}`} key={item.id}>
          <div className="group bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col border border-gray-700/80">
            <div className="relative h-48">
              <div className="absolute inset-0 overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/70 z-10"></div>
                
                {/* Subtle glow effect */}
                <div className="absolute -inset-[40%] bg-blue-500/10 rounded-full blur-3xl z-0 opacity-50"></div>
                
                {/* Mock browser frame */}
                <div className="absolute inset-0 rounded-t-lg bg-gray-800 border border-gray-700 overflow-hidden shadow-2xl z-5">
                  {/* Browser header */}
                  <div className="h-6 bg-gray-900 flex items-center px-3">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 px-2 py-0.5 bg-gray-800 rounded text-xs text-gray-400 flex items-center">
                      <span className="mx-auto">{item.url}</span>
                    </div>
                  </div>
                  
                  {/* Screenshot with better positioning */}
                  <div className="relative h-[calc(100%-24px)] overflow-hidden">
                    {item.thumbnail ? (
                      <img 
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full object-cover transition-all duration-4000 hover:translate-y-[-10%]"
                        style={{
                          objectPosition: '50% 15%',
                          height: '110%',
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                        <span className="text-blue-400">No image</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col z-10">
              <h2 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-400 mb-4">{item.subtitle}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {item.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full text-blue-400 border border-blue-500/20"
                    style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PortfolioGrid; 