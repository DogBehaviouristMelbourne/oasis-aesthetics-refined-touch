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
        className="absolute inset-0 bg-gradient-to-t from-oasis-espresso/10 via-transparent to-transparent"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      
      {/* Floating decorative elements with parallax - moved to prevent overlap */}
      <div 
        className="absolute top-32 left-10 w-16 h-16 bg-oasis-taupe/20 rounded-full blur-xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute bottom-32 right-10 w-24 h-24 bg-oasis-clay/20 rounded-full blur-xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.4}px)`, animationDelay: '1s' }}
      ></div>
      
      {/* Split-screen layout with better spacing */}
      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mt-16">
        {/* Text Content */}
        <div className="animate-fade-in order-2 lg:order-1">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-playfair font-bold text-oasis-espresso mb-4 leading-tight tracking-tight">
            Enhance Your<br />
            <span className="bg-gradient-to-r from-oasis-clay via-oasis-taupe to-oasis-hover bg-clip-text text-transparent">
              Natural Beauty
            </span>
          </h1>
          <p className="text-lg lg:text-xl xl:text-2xl text-oasis-espresso/80 mb-4 leading-relaxed font-medium">
            Expert Brow Sculpting & Waxing in Melbourne
          </p>
          <p className="text-sm lg:text-base text-oasis-espresso/70 mb-8 leading-relaxed max-w-md">
            Precision treatments in a relaxing environment designed for your comfort.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://oasisaesthetics.setmore.com/book" 
              className="group inline-flex items-center justify-center bg-gradient-to-r from-oasis-espresso to-oasis-hover text-white px-6 py-3 rounded-full text-base font-semibold hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              tabIndex={0}
              target="_blank" rel="noopener"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-oasis-clay to-oasis-taupe opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Book Now</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center border-2 border-oasis-espresso text-oasis-espresso px-6 py-3 rounded-full text-base font-semibold hover:bg-oasis-espresso hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/60"
              tabIndex={0}
            >
              View Services
            </a>
          </div>
        </div>

        {/* Visual Content - Updated with eyebrow-focused imagery */}
        <div className="relative animate-fade-in order-1 lg:order-2" style={{animationDelay: '0.3s'}}>
          <div className="relative">
            {/* Main image container with organic mask */}
            <div className="relative w-full h-80 lg:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-oasis-taupe/20 to-oasis-clay/20 z-10"></div>
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/hero-bg.jpg")',
                  transform: `translateY(${scrollY * 0.1}px)`
                }}
              ></div>
              {/* Overlay text */}
              <div className="absolute bottom-4 left-4 text-white z-20">
                <p className="text-xs font-medium opacity-90">Perfect brows, every time</p>
              </div>
            </div>

            {/* Floating accent elements - smaller and repositioned */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-oasis-taupe to-oasis-clay rounded-full blur-lg opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tl from-oasis-warm-taupe to-oasis-contrast rounded-full blur-lg opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
