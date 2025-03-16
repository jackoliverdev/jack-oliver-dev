import React from 'react';
import { useParams } from 'react-router-dom';
import CentrusDashboardMockup from '../../components/portfolio/mockup/CentrusDashboard';

// Portfolio item data
const portfolioItems = {
  'centrus-ai': {
    id: 'centrus-ai',
    title: 'Centrus AI',
    subtitle: 'Enterprise AI Training & Management Platform',
    description: 'A comprehensive platform for businesses to train, manage, and deploy custom AI models specific to their industry needs.',
    client: 'Centrus Technologies',
    duration: '6 months',
    year: '2023',
    services: ['UX/UI Design', 'Frontend Development', 'System Architecture'],
    overview: [
      'Centrus AI is an enterprise platform designed to enable companies to easily train and deploy custom AI models tailored to their specific business needs. The platform provides intuitive interfaces for data management, model training, and deployment across multiple channels.',
      'Our team was tasked with designing and implementing the user interface for the platform, focusing on creating a seamless experience for both technical and non-technical users.',
      'The dashboard provides administrators with an overview of usage statistics, model performance, and user activity, making AI management accessible for enterprise teams.'
    ],
    technologies: [
      { name: 'React', icon: '/images/tech/react.svg' },
      { name: 'Next.js', icon: '/images/tech/nextjs.svg' },
      { name: 'TailwindCSS', icon: '/images/tech/tailwind.svg' },
      { name: 'OpenAI API', icon: '/images/tech/openai.svg' },
      { name: 'Supabase', icon: '/images/tech/supabase.svg' },
      { name: 'Firebase', icon: '/images/tech/firebase.svg' }
    ],
    mockups: [
      {
        title: 'Admin Dashboard',
        description: 'The central dashboard gives administrators a complete view of platform usage, active users, and resource allocation.',
        component: CentrusDashboardMockup
      }
    ],
    results: [
      '40% reduction in time required for businesses to deploy custom AI models',
      'Intuitive interface enabled non-technical stakeholders to monitor AI performance',
      'Scalable architecture supporting enterprise-level data processing requirements',
      'Successfully deployed across 3 major enterprise clients with 100+ active users'
    ]
  }
  // Other portfolio items would be defined here
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const item = portfolioItems[id];
  
  if (!item) {
    return <div className="container mx-auto p-8">Loading...</div>;
  }
  
  return (
    <main className="container mx-auto px-4 pt-32 pb-12">
      {/* Project Header - Reduced bottom margin from mb-16 to mb-8 */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-white">{item.title}</h1>
        <p className="text-xl text-gray-200 mb-8">{item.subtitle}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm text-gray-400 mb-1">Client</h3>
            <p className="font-medium text-gray-200">{item.client}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-1">Duration</h3>
            <p className="font-medium text-gray-200">{item.duration}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-1">Year</h3>
            <p className="font-medium text-gray-200">{item.year}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-1">Services</h3>
            <div className="flex flex-wrap gap-2">
              {item.services.map((service, index) => (
                <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white">Project Overview</h2>
            <div className="space-y-4">
              {item.overview.map((paragraph, index) => (
                <p key={index} className="text-gray-200 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </section>
          
          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white">Technologies Used</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 relative overflow-hidden group">
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
              
              <div className="flex flex-wrap gap-4 relative z-10">
                {item.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-900/80 px-4 py-2 rounded-lg border border-gray-700 flex items-center space-x-2 hover:border-blue-500/50 transition-colors">
                    {tech.icon && (
                      <div className="w-5 h-5 flex items-center justify-center text-blue-400">
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="max-w-full max-h-full object-contain"
                          style={{ filter: "brightness(0) invert(61%) sepia(83%) saturate(3367%) hue-rotate(191deg) brightness(100%) contrast(101%)" }}
                        />
                      </div>
                    )}
                    <span className="text-sm text-gray-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Mockups */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">Mockups & Screenshots</h2>
            <div className="space-y-12">
              {item.mockups.map((mockup, index) => {
                const MockupComponent = mockup.component;
                return (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">{mockup.title}</h3>
                    <p className="text-gray-200">{mockup.description}</p>
                    <div className="mt-6 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
                      <MockupComponent />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        
        {/* Results */}
        <div className="lg:col-span-4">
          <div className="rounded-xl overflow-hidden shadow-xl p-6 border border-gray-800/80 relative"
               style={{ background: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(4px)' }}>
            {/* Subtle glow effect */}
            <div className="absolute -inset-[40%] bg-blue-500/10 rounded-full blur-3xl z-0 opacity-50"></div>
            
            <h2 className="text-2xl font-bold mb-6 text-white relative z-10">Project Outcomes</h2>
            
            <ul className="space-y-4 relative z-10">
              {item.results.map((result, index) => (
                <li key={index} className="flex gap-3">
                  <div className="text-blue-400 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-gray-200">{result}</div>
                </li>
              ))}
            </ul>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-3 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
              <div className="absolute top-0 left-0 h-3 w-10 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-3 h-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
              <div className="absolute bottom-0 right-0 h-3 w-10 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioDetail; 