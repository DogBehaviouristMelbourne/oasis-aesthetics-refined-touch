
import React from 'react';

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-oasis-contrast via-oasis-warm-taupe/20 to-oasis-contrast px-4 lg:px-6 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,400 L0,400 Z" fill="rgba(184, 159, 137, 0.05)"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <path d="M1000,300 C850,200 650,400 500,300 C350,200 150,400 0,300 L0,0 L1000,0 Z" fill="rgba(196, 164, 132, 0.05)"/>
        </svg>
      </div>
      
      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-oasis-espresso mb-4 animate-fade-in">
          Stay Updated
        </h3>
        <p className="text-lg text-oasis-hover mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
          Beauty tips and exclusive offers
        </p>
        
        <form 
          action="mailto:veanmikhael@proton.me" 
          method="post"
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-fade-in"
          style={{animationDelay: '0.4s'}}
        >
          <input 
            type="email" 
            placeholder="Your email"
            required
            tabIndex={0}
            aria-label="Email address"
            className="flex-1 px-6 py-4 border-2 border-oasis-taupe/30 rounded-full bg-white/90 backdrop-blur-sm text-oasis-espresso placeholder:text-oasis-taupe/60 focus:outline-none focus:ring-2 focus:ring-oasis-taupe focus:border-transparent shadow-lg text-base transition-all duration-300 hover:shadow-xl focus:shadow-xl"
          />
          <button 
            type="submit"
            tabIndex={0}
            className="bg-gradient-to-r from-oasis-espresso to-oasis-hover text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-base whitespace-nowrap relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-oasis-clay to-oasis-taupe opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">Subscribe</span>
          </button>
        </form>
      </div>
    </section>
  );
};
