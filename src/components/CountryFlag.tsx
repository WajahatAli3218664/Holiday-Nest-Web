import React from 'react';

interface CountryFlagProps {
  code: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showCode?: boolean;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ 
  code, 
  className = "", 
  size = "md",
  showCode = false
}) => {
  const sizeClasses = {
    sm: "h-4 w-6",
    md: "h-6 w-8",
    lg: "h-8 w-10"
  };

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <img
        src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
        alt={`${code.toUpperCase()} flag`}
        className={`${sizeClasses[size]} object-cover rounded-sm`}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
        }}
      />
      {showCode && (
        <span className="text-sm font-medium">{code.toUpperCase()}</span>
      )}
    </div>
  );
};