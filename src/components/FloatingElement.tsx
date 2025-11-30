
import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 4 
}) => {
  return (
    <div 
      className={`floating-simple ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
