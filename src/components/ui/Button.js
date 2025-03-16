import React from 'react';
import { Link } from 'react-router-dom';

function Button({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md', 
  icon = null,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 relative group";
  
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-sm hover:shadow",
    secondary: "bg-gray-900 border border-blue-500/30 text-blue-400 hover:border-blue-400 rounded-lg shadow-sm backdrop-blur-sm",
    ghost: "bg-transparent hover:bg-gray-800/30 text-gray-200 hover:text-white backdrop-blur-sm",
    outline: "bg-transparent border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 rounded-lg"
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2 rounded-md",
    md: "px-6 py-3 rounded-lg",
    lg: "text-lg px-8 py-4 rounded-lg"
  };

  const allClassNames = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-500/20 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={allClassNames} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={allClassNames} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={allClassNames} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;