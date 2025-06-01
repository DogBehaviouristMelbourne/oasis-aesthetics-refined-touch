
import React, { useState, useEffect } from 'react';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Add meta tags and schema markup
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert brow sculpting & waxing with a personal touch in Melbourne. Experience gentle, precise treatments in a relaxing, spa-like environment.');
    }

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'brow sculpting, eyebrow waxing, Melbourne, Oasis Aesthetics, beauty treatments, spa';
    document.head.appendChild(metaKeywords);

    // Add Open Graph meta tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Oasis Aesthetics - Empowering Your Natural Beauty';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Expert brow sculpting & waxing with a personal touch in Melbourne';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);

    // Add LocalBusiness schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Oasis Aesthetics",
      "url": window.location.origin,
      "description": "Expert brow sculpting & waxing with a personal touch in Melbourne. Experience gentle, precise treatments in a relaxing, spa-like environment.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressCountry": "AU"
      },
      "image": "https://lovable.dev/opengraph-image-p98pqg.png",
      "logo": "https://lovable.dev/opengraph-image-p98pqg.png"
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    // Add Google Analytics (placeholder)
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(gaScript);

    const gaConfig = document.createElement('script');
    gaConfig.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `;
    document.head.appendChild(gaConfig);

    return () => {
      // Cleanup meta tags on unmount
      document.head.removeChild(metaKeywords);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
      document.head.removeChild(schemaScript);
      document.head.removeChild(gaScript);
      document.head.removeChild(gaConfig);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleNav();
    }
  };

  return (
    <div className="min-h-screen bg-oasis-base font-inter">
      <header className="sticky top-0 z-50 bg-oasis-base/95 backdrop-blur-sm border-b border-oasis-taupe/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <svg 
                width="160" 
                height="48" 
                viewBox="0 0 200 60" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-label="Oasis Aesthetics Logo"
                className="mr-2"
              >
                <style>
                  {`.logo-text { font-family: 'Playfair Display', serif; font-size: 18px; fill: #4A3B36; }
                   .logo-icon { fill: none; stroke: #B89F89; stroke-width: 3; }`}
                </style>
                <path className="logo-icon" d="M30 40 C40 20, 60 20, 70 40 S90 60, 100 40"/>
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
            
            <nav 
              id="main-nav" 
              aria-label="Main Navigation"
              className={`${isNavOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-oasis-base md:bg-transparent border-b md:border-b-0 border-oasis-taupe/20 md:border-0 flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 py-4 md:py-0 px-4 md:px-0`}
            >
              <a href="index.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium" tabIndex={0}>Home</a>
              <a href="about.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium" tabIndex={0}>About</a>
              <a href="services.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium" tabIndex={0}>Services</a>
              <a href="gallery.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium" tabIndex={0}>Gallery</a>
              <a href="blog.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium" tabIndex={0}>Blog</a>
              <a href="booking.html" className="bg-oasis-espresso text-white px-4 py-2 rounded-full hover:bg-oasis-hover transition-all duration-300 font-medium text-sm" tabIndex={0}>Book</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-oasis-base via-oasis-contrast to-oasis-warm-taupe opacity-50"></div>
          <div className="container mx-auto text-center relative z-10 animate-fade-in max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-playfair font-semibold text-oasis-espresso mb-4 leading-tight">
              Empowering Your Natural Beauty
            </h2>
            <p className="text-lg lg:text-xl text-oasis-hover mb-4 leading-relaxed">
              Expert Brow Sculpting & Waxing with a Personal Touch in Melbourne.
            </p>
            <p className="text-sm text-oasis-espresso/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to Oasis Aesthetics, where your comfort and confidence come first. Experience gentle, precise treatments in a relaxing, spa-like environment.
            </p>
            <a 
              href="booking.html" 
              className="inline-block bg-oasis-espresso text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-oasis-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              tabIndex={0}
            >
              Book Your Appointment
            </a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-oasis-contrast px-4 lg:px-6">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-xl lg:text-2xl font-playfair font-semibold text-oasis-espresso text-center mb-8">
              What Our Clients Say
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  quote: "Vean is a true artist! My brows have never looked better. Highly recommend Oasis Aesthetics.",
                  author: "Sarah M."
                },
                {
                  quote: "Professional, gentle, and always a relaxing experience. I wouldn't go anywhere else.",
                  author: "Emily R."
                },
                {
                  quote: "Vean's attention to detail is unmatched. My brows have never looked better!",
                  author: "Sarah T."
                },
                {
                  quote: "A calming, professional environment. Highly recommend!",
                  author: "Olivia P."
                }
              ].map((testimonial, index) => (
                <blockquote 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-oasis-taupe/30 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <p className="text-xs text-oasis-espresso/90 leading-relaxed mb-3 italic">
                    "{testimonial.quote}"
                  </p>
                  <span className="text-xs text-oasis-hover font-medium">
                    - {testimonial.author}
                  </span>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 px-4 lg:px-6">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl lg:text-2xl font-playfair font-semibold text-oasis-espresso text-center mb-8">
              Why Choose Oasis Aesthetics?
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Personalized consultations for every client",
                "Use of high-quality, gentle products",
                "Relaxing, spa-like atmosphere",
                "Strict hygiene and safety protocols",
                "Tailored treatments for your unique features"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-oasis-taupe/20 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-oasis-taupe rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-xs text-oasis-espresso leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-oasis-contrast px-4 lg:px-6">
          <div className="container mx-auto text-center max-w-2xl">
            <h3 className="text-xl lg:text-2xl font-playfair font-semibold text-oasis-espresso mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-xs text-oasis-hover mb-6">
              Stay updated with our latest treatments, tips, and exclusive offers.
            </p>
            <form 
              action="mailto:veanmikhael@proton.me" 
              method="post"
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input 
                type="email" 
                placeholder="Enter your email"
                required
                tabIndex={0}
                aria-label="Email address"
                className="flex-1 px-4 py-2.5 border-0 rounded-full bg-white text-oasis-espresso placeholder:text-oasis-taupe focus:outline-none focus:ring-2 focus:ring-oasis-taupe shadow-sm text-xs"
              />
              <button 
                type="submit"
                tabIndex={0}
                className="bg-oasis-espresso text-white px-6 py-2.5 rounded-full font-medium hover:bg-oasis-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-oasis-espresso text-white py-6 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <small className="text-oasis-warm-taupe text-center md:text-left text-xs">
              © 2025 Oasis Aesthetics. All rights reserved. 
              <a href="privacy.html" className="hover:text-white transition-colors duration-300 ml-2" tabIndex={0}>Privacy Policy</a> | 
              <a href="terms-of-service.html" className="hover:text-white transition-colors duration-300 ml-2" tabIndex={0}>Terms of Service</a>
            </small>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/oasisaesthetics.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-oasis-warm-taupe hover:text-white transition-colors duration-300 text-xs"
                aria-label="Follow us on Instagram"
                tabIndex={0}
              >
                Instagram
              </a>
              <a 
                href="mailto:veanmikhael@proton.me"
                className="text-oasis-warm-taupe hover:text-white transition-colors duration-300 text-xs"
                aria-label="Send us an email"
                tabIndex={0}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
