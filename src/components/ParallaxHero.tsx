import React from 'react';

// Accepts scrollY for parallax, keeping prop for future animation/fine-tuning
interface ParallaxHeroProps {
  scrollY: number;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({ scrollY }) => {
  return (
    <section className="relative min-h-[70vh] flex flex-col lg:flex-row items-center justify-center px-3 lg:px-6 overflow-hidden pt-24 pb-8 bg-oasis-base">
      {/* Parallax backgrounds, reduced on mobile */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-oasis-base via-oasis-contrast/70 to-oasis-warm-taupe/40"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-oasis-espresso/10 via-transparent to-transparent"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      />
      {/* Decorative mobile-optimized elements */}
      <div
        className="absolute top-12 left-3 w-8 h-8 bg-oasis-taupe/10 rounded-full blur-xl animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.10}px)` }}
      />
      <div
        className="absolute bottom-8 right-4 w-12 h-12 bg-oasis-clay/15 rounded-full blur-lg animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.15}px)`, animationDelay: '1s' }}
      />

      {/* Content layout, stacked on mobile */}
      <div className="relative z-10 w-full flex flex-col-reverse lg:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 w-full text-center lg:text-left lg:pr-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-playfair font-bold text-oasis-espresso mb-2 leading-snug">
            Enhance&nbsp;Your
            <br />
            <span className="bg-gradient-to-r from-oasis-clay via-oasis-taupe to-oasis-hover bg-clip-text text-transparent">
              Natural Beauty
            </span>
          </h1>
          <p className="text-base sm:text-lg text-oasis-espresso font-medium mb-3 leading-relaxed">
            Precision Brow Sculpting &amp; Waxing
          </p>
          <p className="text-xs sm:text-sm text-oasis-espresso/80 mb-6 max-w-sm mx-auto lg:mx-0">
            Expert treatments in a tranquil boutique studio. Soft, gentle, and tailored for Melbourne’s best brows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <a
              href="https://oasisaesthetics.setmore.com/book"
              className="group inline-flex items-center justify-center bg-oasis-espresso text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-oasis-hover transition-all duration-400"
              tabIndex={0}
              target="_blank"
              rel="noopener"
            >
              Book Now
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center border border-oasis-espresso text-oasis-espresso px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-oasis-espresso hover:text-white transition-all duration-300 bg-white/90"
              tabIndex={0}
            >
              View Services
            </a>
          </div>
        </div>
        {/* Right: Visual - Eyebrow Photo */}
        <div className="flex-1 w-full flex items-center justify-center relative mb-4 lg:mb-0">
          <div className="relative w-full max-w-[320px] h-44 sm:h-56 md:max-w-[400px] md:h-[260px] lg:max-w-[440px] lg:h-[280px] rounded-3xl overflow-hidden shadow-lg">
            {/* Cosmetic brow photo supplied by user */}
            <img
              src="/before-and-after.JPG"
              alt="Client eyebrow transformation"
              className="w-full h-full object-cover object-center"
              draggable={false}
              loading="eager"
              style={{ filter: 'brightness(97%) contrast(1.04)' }}
            />
            {/* Overlayed brow text */}
            <div className="absolute bottom-2 left-3 text-oasis-espresso/90 bg-white/80 px-3 py-1 rounded-2xl text-xs font-bold shadow">
              Perfect brows, every time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
