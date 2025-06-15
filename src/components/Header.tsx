import React from 'react';
import { Navigation } from './Navigation';
import { Phone } from 'lucide-react';

interface HeaderProps {
  isNavOpen: boolean;
  toggleNav: () => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  scrollY: number;
}

export const Header: React.FC<HeaderProps> = ({ isNavOpen, toggleNav, handleKeyDown, scrollY }) => {
  // Close nav after navigation (for mobile)
  const handleNavigate = () => {
    if (isNavOpen) toggleNav();
  };
  return (
    <header className={`fixed top-0 w-full z-[1000] transition-all duration-300 pb-4 ${scrollY > 50 ? 'bg-oasis-base/95 backdrop-blur-xl shadow-lg' : 'bg-oasis-base/90 backdrop-blur-lg'} border-b border-oasis-taupe/20`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <svg 
              width="160" 
              height="48" 
              viewBox="0 0 200 60" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-label="Oasis Aesthetics Logo"
              className="mr-2 transition-all duration-500 hover:scale-105 hover:rotate-1"
            >
              <style>
                {`.logo-text { font-family: 'Playfair Display', serif; font-size: 18px; fill: #4A3B36; }
                 .logo-icon { fill: none; stroke: #B89F89; stroke-width: 3; transition: all 0.3s ease; }`}
              </style>
              <path className="logo-icon hover:stroke-oasis-clay" d="M30 40 C40 20, 60 20, 70 40 S90 60, 100 40"/>
              <text x="20" y="55" className="logo-text">Oasis Aesthetics</text>
            </svg>
          </div>
          
          <button 
            className={`md:hidden w-6 h-6 flex flex-col justify-center items-center space-y-1 transition-all duration-300 ${isNavOpen ? 'rotate-45' : ''}`}
            aria-label="Open navigation" 
            aria-controls="main-nav" 
            aria-expanded={isNavOpen}
            tabIndex={0}
            onClick={toggleNav}
            onKeyDown={handleKeyDown}
          >
            <span className={`w-5 h-0.5 bg-oasis-espresso transition-all duration-300 ${isNavOpen ? 'rotate-90 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-oasis-espresso transition-all duration-300 ${isNavOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-oasis-espresso transition-all duration-300 ${isNavOpen ? '-rotate-90 -translate-y-1.5' : ''}`}></span>
          </button>
          
          <Navigation isNavOpen={isNavOpen} onNavigate={handleNavigate} />
          
          <div className="flex items-center gap-2 ml-auto">
            <Phone className="w-5 h-5 text-oasis-espresso" aria-hidden="true" />
            <span className="hidden sm:inline">Call us</span>
            <a href="tel:0451167457" className="font-bold text-oasis-espresso hover:text-oasis-hover transition-colors ml-1 whitespace-nowrap">0451 167 457</a>
          </div>
        </div>
      </div>
    </header>
  );
};
