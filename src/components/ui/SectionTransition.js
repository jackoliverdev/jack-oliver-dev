import React from 'react';

function SectionTransition({ direction = 'down', color = 'blue', opacity = 0.05 }) {
  const colors = {
    blue: '#3B82F6',
    indigo: '#6366F1',
    purple: '#8B5CF6',
    dark: '#111827',
  };
  
  const fillColor = colors[color] || colors.blue;
  
  if (direction === 'up') {
    return (
      <div className="relative w-full h-[150px] overflow-hidden mt-[-150px]">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill={fillColor}
            fillOpacity={opacity}
          ></path>
        </svg>
      </div>
    );
  }
  
  return (
    <div className="relative w-full h-[150px] overflow-hidden mb-[-150px]">
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill={fillColor}
          fillOpacity={opacity}
        ></path>
      </svg>
    </div>
  );
}

export default SectionTransition; 