import React from 'react';

function CurvedDivider({ position = 'bottom', color = 'blue', opacity = 0.2 }) {
  const colors = {
    blue: '#3B82F6',
    indigo: '#6366F1',
    purple: '#8B5CF6',
    pink: '#EC4899',
  };
  
  const fillColor = colors[color] || colors.blue;
  
  if (position === 'top') {
    return (
      <div className="absolute top-0 left-0 w-full overflow-hidden z-10">
        <svg
          className="relative block w-full h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill={fillColor}
            fillOpacity={opacity}
          ></path>
        </svg>
      </div>
    );
  }
  
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
      <svg
        className="relative block w-full h-[60px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill={fillColor}
          fillOpacity={opacity}
        ></path>
      </svg>
    </div>
  );
}

export default CurvedDivider; 