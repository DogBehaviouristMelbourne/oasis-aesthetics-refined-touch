
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
          
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/oasisaesthetics.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-oasis-warm-taupe hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:rotate-12"
              aria-label="Follow us on Instagram"
              tabIndex={0}
            >
              <svg className="w-6 h-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="mailto:veanmikhael@proton.me"
              className="text-oasis-warm-taupe hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:rotate-12"
              aria-label="Send us an email"
              tabIndex={0}
            >
              <svg className="w-6 h-6 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
