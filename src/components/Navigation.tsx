import { Link } from 'react-router-dom';
import React from 'react';

interface NavigationProps {
  isNavOpen: boolean;
  onNavigate?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isNavOpen, onNavigate }) => {
  // Map nav items to section IDs for smooth scroll
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#blog', label: 'Blog' }
  ];

  // Scroll to section and close nav (for mobile)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (onNavigate) onNavigate();
    }
  };

  return (
    <nav 
      id="main-nav" 
      aria-label="Main Navigation"
      className={`fixed md:static top-16 left-0 w-full md:w-auto z-40 bg-oasis-base/98 md:bg-transparent border-b md:border-0 border-oasis-taupe/20 md:border-none flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 py-4 md:py-0 px-4 md:px-0 transition-all duration-300 ${isNavOpen ? 'flex' : 'hidden'} md:flex`}
    >
      {navItems.map((item) => (
        <a 
          key={item.href}
          href={item.href}
          className="text-sm sm:text-base md:text-sm text-oasis-espresso hover:text-oasis-hover transition-all duration-300 font-medium hover:scale-105 relative group px-2 py-1 md:px-0 md:py-0" 
          tabIndex={0}
          onClick={e => handleNavClick(e, item.href)}
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-oasis-taupe to-oasis-clay transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
      <a 
        href="#booking" 
        className="bg-gradient-to-r from-oasis-espresso to-oasis-hover text-white px-5 py-2 rounded-full hover:shadow-xl transition-all duration-300 font-medium text-sm sm:text-base md:text-sm transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group mt-2 md:mt-0" 
        tabIndex={0}
        onClick={e => handleNavClick(e, '#booking')}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-oasis-clay to-oasis-taupe opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative">Book</span>
      </a>
    </nav>
  );
};

<Link to="/blog" className="text-brown-700 hover:text-brown-900 font-medium">Blog</Link>
