import React from 'react';

const SecondaryButton = ({ 
  children, 
  className = '', 
  size = 'lg',
  variant = 'outline',
  iconLeft, 
  iconRight,
  loading = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-3xl shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all duration-300 hover:shadow-2xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none';
  
  const sizeStyles = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-6 text-xl',
    xl: 'px-16 py-8 text-2xl'
  };

  const variantStyles = {
    outline: 'bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 ring-gray-500 ring-offset-white',
    ghost: 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 bg-transparent ring-gray-500 ring-offset-white',
    subtle: 'bg-white/50 backdrop-blur-sm text-gray-800 border border-gray-200 hover:border-gray-400 hover:bg-white ring-gray-500 ring-offset-white'
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-3 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {iconLeft && <span className={`mr-2 ${size === 'xl' ? 'text-2xl' : 'text-xl'}`}>{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className={`ml-2 ${size === 'xl' ? 'text-2xl' : 'text-xl'}`}>{iconRight}</span>}
        </>
      )}
    </button>
  );
};

export default SecondaryButton;

