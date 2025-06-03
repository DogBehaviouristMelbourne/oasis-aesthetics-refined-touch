
import React from 'react';

interface NavigationProps {
  isNavOpen: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isNavOpen }) => {
  const navItems = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About" },
    { href: "services.html", label: "Services" },
    { href: "gallery.html", label: "Gallery" },
    { href: "blog.html", label: "Blog" }
  ];

  return (
    <nav 
      id="main-nav" 
      aria-label="Main Navigation"
      className={`${isNavOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-oasis-base/95 md:bg-transparent backdrop-blur-sm border-b md:border-b-0 border-oasis-taupe/20 md:border-0 flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 py-4 md:py-0 px-4 md:px-0`}
    >
      {navItems.map((item) => (
        <a 
          key={item.href}
          href={item.href} 
          className="text-sm text-oasis-espresso hover:text-oasis-hover transition-all duration-300 font-medium hover:scale-105 relative group" 
          tabIndex={0}
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-oasis-taupe to-oasis-clay transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
      <a 
        href="booking.html" 
        className="bg-gradient-to-r from-oasis-espresso to-oasis-hover text-white px-6 py-2.5 rounded-full hover:shadow-xl transition-all duration-300 font-medium text-sm transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group" 
        tabIndex={0}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-oasis-clay to-oasis-taupe opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative">Book</span>
      </a>
    </nav>
  );
};
