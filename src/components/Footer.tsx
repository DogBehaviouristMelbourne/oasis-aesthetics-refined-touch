import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-oasis-espresso via-oasis-hover to-oasis-espresso text-white py-12 px-4 lg:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-oasis-warm-taupe text-sm leading-relaxed">
              © 2025 Oasis Aesthetics. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
              <a href="privacy.html" className="text-oasis-warm-taupe hover:text-white transition-all duration-300 text-sm hover:underline hover:scale-105" tabIndex={0}>Privacy</a>
              <span className="text-oasis-warm-taupe">|</span>
              <a href="terms-of-service.html" className="text-oasis-warm-taupe hover:text-white transition-all duration-300 text-sm hover:underline hover:scale-105" tabIndex={0}>Terms</a>
            </div>
          </div>
        </div>
        <div className="contact mt-4">
          <p>Phone: 0451 167 457</p>
          <p>Email: theoasissco@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
