import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-2xl mx-auto relative">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-1/2 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
        </div>
        
        <h1 className="text-8xl font-bold text-blue-500 mb-6">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/" variant="primary">
            Back to Home
          </Button>
          <Button to="/contact" variant="outline" className="hover:bg-blue-500/10">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound; 