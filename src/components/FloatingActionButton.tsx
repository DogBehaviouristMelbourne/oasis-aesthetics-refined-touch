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

  return (
    <a
      href="https://oasisaesthetics.setmore.com/book"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 bg-brown-700 text-white rounded-full p-4 shadow-md z-50 transition-all duration-500 transform ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      } ${isHovered ? 'scale-110' : ''}`}
      aria-label="Book Now"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
    </a>
  );
};
