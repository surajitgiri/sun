import React from 'react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'lg',
  variant = 'default',
  footer,
  closeOnOverlayClick = true
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    fullscreen: 'w-full h-full max-w-none max-h-none rounded-none'
  };

  const variantClasses = {
    default: 'bg-white border-gray-200',
    glass: 'bg-white/80 backdrop-blur-xl border-white/50 shadow-2xl',
    gradient: 'bg-gradient-to-br from-white to-gray-50 border-gray-200/50 shadow-2xl'
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in zoom-in duration-200"
      onClick={handleOverlayClick}
    >
      <div className={`relative ${sizeClasses[size]} ${variantClasses[variant]} rounded-3xl shadow-2xl shadow-black/20 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300`}>
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-8 pb-6 bg-white/50 backdrop-blur-sm rounded-t-3xl border-b border-gray-200">
          <h3 className="text-3xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-3 rounded-2xl hover:bg-gray-200 hover:rotate-90 transition-all duration-300 group"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="sticky bottom-0 z-10 p-8 pt-6 bg-white/50 backdrop-blur-sm border-t border-gray-200 rounded-b-3xl">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

// Usage example:
// const [isOpen, setIsOpen] = useState(false);
// <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Register">
//   <p>Form content here</p>
// </Modal>

