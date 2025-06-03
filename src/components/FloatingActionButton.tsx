
import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToBooking}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      } ${isHovered ? 'scale-110' : ''}`}
      aria-label="Quick booking"
    >
      <div className="relative">
        {/* Pulsing background ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-oasis-espresso to-oasis-hover rounded-full animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-oasis-espresso to-oasis-hover rounded-full animate-ping"></div>
        
        {/* Main button */}
        <div className="relative bg-gradient-to-r from-oasis-espresso to-oasis-hover text-white p-4 rounded-full shadow-2xl hover:shadow-oasis-clay/50 transition-all duration-300 group">
          <Calendar className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
          
          {/* Tooltip */}
          <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}>
            <div className="bg-oasis-espresso text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
              Quick Book
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-oasis-espresso"></div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
