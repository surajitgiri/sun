import React from 'react';

const PrimaryButton = ({ 
  children, 
  className = '', 
  size = 'lg',
  variant = 'indigo',
  iconLeft, 
  iconRight,
  loading = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-3xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all duration-300 hover:shadow-3xl active:scale-[0.98] border-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none';
  
  const sizeStyles = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-6 text-xl',
    xl: 'px-16 py-8 text-2xl'
  };
  
  const variantStyles = {
    indigo: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 ring-indigo-500 ring-offset-white',
    emerald: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 ring-emerald-500 ring-offset-white',
    gold: 'bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 hover:from-amber-600 hover:to-orange-600 ring-amber-500 ring-offset-white',
    gradient: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 text-white hover:brightness-105 ring-indigo-500 ring-offset-white'
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-4 border-current border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {iconLeft && <span className={`mr-3 ${size === 'xl' ? 'text-3xl' : 'text-2xl'}`}>{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className={`ml-3 ${size === 'xl' ? 'text-3xl' : 'text-2xl'}`}>{iconRight}</span>}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;

