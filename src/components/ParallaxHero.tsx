import React from 'react';

// Accepts scrollY for parallax, keeping prop for future animation/fine-tuning
interface ParallaxHeroProps {
  scrollY: number;
  variant?: 'default' | 'minimal'; // for minimalist variant
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({ scrollY, variant = 'default' }) => {
  if (variant === 'minimal') {
    // Minimalist variant: flat background, centered headline, single CTA, abstract line art
    return (
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-[#f7f3ef]">
        {/* Abstract line art (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-20 z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64" stroke="#bfae9c" strokeWidth="3" fill="none" />
        </svg>
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto text-center py-16">
          <h1 className="font-sans font-bold text-[2.5rem] sm:text-[3.5rem] text-oasis-espresso leading-tight mb-6" style={{letterSpacing: '-0.01em'}}>
            Enhance Your Natural Beauty
          </h1>
          <a
            href="https://oasisaesthetics.setmore.com/book"
            className="inline-flex items-center justify-center bg-oasis-espresso text-white font-semibold text-lg rounded-full px-8 py-4 min-h-[44px] min-w-[44px] shadow-lg hover:bg-oasis-hover transition-all duration-300"
            tabIndex={0}
            target="_blank"
            rel="noopener"
          >
            Book Now
          </a>
        </div>
      </section>
    );
  }

  // Default (photo) variant
  return (
    <section className="relative min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-center px-0 overflow-hidden pt-24 pb-8 bg-oasis-base font-sans">
      {/* Full-bleed hero image background */}
      <img
        src="/hero-bg.jpg"
        alt="Client eyebrow transformation"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        draggable={false}
        loading="eager"
        style={{ filter: 'brightness(97%) contrast(1.04)' }}
      />
      {/* Gradient overlay for contrast (top 40% on mobile, 60% on desktop) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.0) 100%)'
        }}
      ></div>
      {/* Decorative elements (optional, can be removed for minimalism) */}
      <div
        className="absolute top-12 left-3 w-8 h-8 bg-oasis-taupe/10 rounded-full blur-xl animate-pulse z-20"
        style={{ transform: `translateY(${scrollY * 0.10}px)` }}
      />
      <div
        className="absolute bottom-8 right-4 w-12 h-12 bg-oasis-clay/15 rounded-full blur-lg animate-pulse z-20"
        style={{ transform: `translateY(${scrollY * 0.15}px)`, animationDelay: '1s' }}
      />
      {/* Content layout, mobile-first: text above image on <768px */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="w-full max-w-2xl mx-auto text-left md:text-left flex flex-col items-start justify-center" style={{marginTop: '0'}}>
          <h1 className="font-sans font-bold text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[2.5rem] xl:text-[3rem] leading-tight mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.18)', letterSpacing: '-0.01em'}}>
            Enhance Your <span className="block">Natural Beauty</span>
          </h1>
          <p className="text-white text-base sm:text-lg font-normal mb-3 leading-relaxed" style={{textShadow: '0 1px 4px rgba(0,0,0,0.18)'}}>
            Precision Brow Sculpting & Waxing
          </p>
          <p className="text-white text-base font-normal mb-8 max-w-xl" style={{textShadow: '0 1px 4px rgba(0,0,0,0.18)'}}>
            Expert treatments in a tranquil boutique studio. Soft, gentle, and tailored for Melbourne’s best brows.
          </p>
          <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-4">
            <a
              href="https://oasisaesthetics.setmore.com/book"
              className="inline-flex items-center justify-center bg-[#232323] text-white font-semibold text-base rounded-full px-8 py-4 min-h-[44px] min-w-[44px] shadow-lg hover:bg-oasis-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              tabIndex={0}
              target="_blank"
              rel="noopener"
              style={{marginBottom: '0'}}
            >
              Book Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-[#232323] text-white font-semibold text-base rounded-full px-8 py-4 min-h-[44px] min-w-[44px] shadow-lg hover:bg-oasis-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              tabIndex={0}
              style={{marginBottom: '0'}}
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
