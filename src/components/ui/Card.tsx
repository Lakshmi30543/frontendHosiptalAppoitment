import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = false
}) => {
  const hoverClass = hover ? 'transition duration-300 hover:shadow-lg hover:-translate-y-1' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-4 border-b ${className}`}>
      {children}
    </div>
  );
};

export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-4 border-t bg-gray-50 ${className}`}>
      {children}
    </div>
  );
};

export default Card;