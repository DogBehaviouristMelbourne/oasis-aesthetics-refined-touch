
import React from 'react';

interface ParallaxHeroProps {
  scrollY: number;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({ scrollY }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-6 overflow-hidden">
      {/* Parallax background layers */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-oasis-base via-oasis-contrast/80 to-oasis-warm-taupe/60"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      <div 
        className="absolute inset-0 bg-gradient-to-t from-oasis-espresso/20 via-transparent to-transparent"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      
      {/* Floating decorative elements with parallax */}
      <div 
        className="absolute top-20 left-10 w-20 h-20 bg-oasis-taupe/20 rounded-full blur-xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-oasis-clay/20 rounded-full blur-xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.4}px)`, animationDelay: '1s' }}
      ></div>
      
      {/* Split-screen layout */}
      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
        {/* Text Content */}
        <div className="animate-fade-in">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-playfair font-bold text-oasis-espresso mb-6 leading-tight tracking-tight">
            Enhance Your<br />
            <span className="bg-gradient-to-r from-oasis-taupe via-oasis-clay to-oasis-hover bg-clip-text text-transparent animate-pulse">
              Natural Beauty
            </span>
          </h1>
          <p className="text-xl lg:text-2xl xl:text-3xl text-oasis-hover mb-6 leading-relaxed font-light">
            Expert Brow Sculpting & Waxing in Melbourne
          </p>
          <p className="text-base lg:text-lg text-oasis-espresso/70 mb-10 leading-relaxed">
            Precision treatments in a relaxing environment designed for your comfort.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="booking.html" 
              className="group inline-flex items-center bg-gradient-to-r from-oasis-espresso to-oasis-hover text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              tabIndex={0}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-oasis-clay to-oasis-taupe opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Book Now</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center border-2 border-oasis-espresso text-oasis-espresso px-8 py-4 rounded-full text-lg font-semibold hover:bg-oasis-espresso hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/50"
              tabIndex={0}
            >
              View Services
            </a>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="relative">
            {/* Main image container with organic mask */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-oasis-taupe/30 to-oasis-clay/30 z-10"></div>
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80")',
                  transform: `translateY(${scrollY * 0.1}px)`
                }}
              ></div>
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 text-white z-20">
                <p className="text-sm font-medium opacity-90">Your confidence starts here</p>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-oasis-taupe to-oasis-clay rounded-full blur-lg opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tl from-oasis-warm-taupe to-oasis-contrast rounded-full blur-lg opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
