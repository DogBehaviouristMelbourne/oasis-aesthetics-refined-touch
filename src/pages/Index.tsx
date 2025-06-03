
import React, { useState, useEffect } from 'react';
import { BookingSystem } from '../components/BookingSystem';
import { ServiceCards } from '../components/ServiceCards';
import { Gallery } from '../components/Gallery';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';

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
      {/* Enhanced Header with backdrop blur */}
      <header className="fixed top-0 w-full z-50 bg-oasis-base/90 backdrop-blur-lg border-b border-oasis-taupe/20 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <svg 
                width="160" 
                height="48" 
                viewBox="0 0 200 60" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-label="Oasis Aesthetics Logo"
                className="mr-2 transition-transform duration-300 hover:scale-105"
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
              className={`${isNavOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-oasis-base/95 md:bg-transparent backdrop-blur-sm border-b md:border-b-0 border-oasis-taupe/20 md:border-0 flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 py-4 md:py-0 px-4 md:px-0`}
            >
              <a href="index.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-all duration-300 font-medium hover:scale-105" tabIndex={0}>Home</a>
              <a href="about.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-all duration-300 font-medium hover:scale-105" tabIndex={0}>About</a>
              <a href="services.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-all duration-300 font-medium hover:scale-105" tabIndex={0}>Services</a>
              <a href="gallery.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-all duration-300 font-medium hover:scale-105" tabIndex={0}>Gallery</a>
              <a href="blog.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-all duration-300 font-medium hover:scale-105" tabIndex={0}>Blog</a>
              <a href="booking.html" className="bg-gradient-to-r from-oasis-espresso to-oasis-hover text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-sm transform hover:scale-105 hover:-translate-y-0.5" tabIndex={0}>Book</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Enhanced Hero Section with background overlay */}
        <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-6 overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-oasis-base via-oasis-contrast/80 to-oasis-warm-taupe/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-oasis-espresso/20 via-transparent to-transparent"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-oasis-taupe/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-oasis-clay/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="container mx-auto text-center relative z-10 animate-fade-in max-w-5xl">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-playfair font-bold text-oasis-espresso mb-6 leading-tight tracking-tight">
              Empowering Your<br />
              <span className="bg-gradient-to-r from-oasis-taupe to-oasis-clay bg-clip-text text-transparent">
                Natural Beauty
              </span>
            </h1>
            <p className="text-xl lg:text-2xl xl:text-3xl text-oasis-hover mb-6 leading-relaxed font-light">
              Expert Brow Sculpting & Waxing with a Personal Touch in Melbourne
            </p>
            <p className="text-base lg:text-lg text-oasis-espresso/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Welcome to Oasis Aesthetics, where your comfort and confidence come first. Experience gentle, precise treatments in a relaxing, spa-like environment designed for your wellbeing.
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="booking.html" 
                className="group inline-flex items-center bg-gradient-to-r from-oasis-espresso to-oasis-hover text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                tabIndex={0}
              >
                Book Your Appointment
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center border-2 border-oasis-espresso text-oasis-espresso px-8 py-4 rounded-full text-lg font-semibold hover:bg-oasis-espresso hover:text-white transition-all duration-300 transform hover:scale-105"
                tabIndex={0}
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* Enhanced Service Cards with scroll trigger */}
        <div id="services" className="scroll-mt-20">
          <ServiceCards />
        </div>

        {/* Enhanced Gallery */}
        <Gallery />

        {/* Enhanced Booking System */}
        <div id="booking" className="scroll-mt-20">
          <BookingSystem />
        </div>

        {/* Enhanced Testimonials Section with floating cards */}
        <section className="py-20 bg-gradient-to-br from-oasis-contrast via-oasis-base to-oasis-contrast px-4 lg:px-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-oasis-taupe/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-oasis-clay/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-oasis-espresso mb-4">
                What Our Clients Say
              </h3>
              <p className="text-lg text-oasis-hover max-w-2xl mx-auto">
                Discover why our clients love their experience at Oasis Aesthetics
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  quote: "Vean is a true artist! My brows have never looked better. The attention to detail is incredible.",
                  author: "Sarah M.",
                  rating: 5
                },
                {
                  quote: "Professional, gentle, and always a relaxing experience. I wouldn't go anywhere else for my treatments.",
                  author: "Emily R.",
                  rating: 5
                },
                {
                  quote: "Vean's expertise is unmatched. My brows have never looked better and the whole experience is so calming!",
                  author: "Sarah T.",
                  rating: 5
                },
                {
                  quote: "A truly relaxing, professional environment. The results speak for themselves. Highly recommend!",
                  author: "Olivia P.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="group bg-white p-6 rounded-2xl shadow-lg border border-oasis-taupe/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
                >
                  {/* Floating background element */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-oasis-taupe to-oasis-clay rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Star rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-oasis-taupe fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-sm text-oasis-espresso/90 leading-relaxed mb-4 italic font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm text-oasis-hover font-semibold not-italic">
                    — {testimonial.author}
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us Section */}
        <section className="py-20 px-4 lg:px-6 bg-gradient-to-r from-oasis-base to-oasis-contrast">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-oasis-espresso mb-4">
                Why Choose Oasis Aesthetics?
              </h3>
              <p className="text-lg text-oasis-hover max-w-2xl mx-auto">
                Experience the difference with our personalized approach to beauty
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Personalized consultations for every client",
                  icon: "👥"
                },
                {
                  title: "Use of high-quality, gentle products",
                  icon: "✨"
                },
                {
                  title: "Relaxing, spa-like atmosphere",
                  icon: "🌿"
                },
                {
                  title: "Strict hygiene and safety protocols",
                  icon: "🛡️"
                },
                {
                  title: "Tailored treatments for your unique features",
                  icon: "💎"
                },
                {
                  title: "Expert techniques and ongoing education",
                  icon: "🎓"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-oasis-taupe/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-sm text-oasis-espresso leading-relaxed font-medium">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Form */}
        <ContactForm />

        {/* Enhanced Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-oasis-contrast via-oasis-warm-taupe/20 to-oasis-contrast px-4 lg:px-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-oasis-taupe/5 to-transparent"></div>
          
          <div className="container mx-auto text-center max-w-3xl relative z-10">
            <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-oasis-espresso mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-lg text-oasis-hover mb-8 leading-relaxed">
              Stay updated with our latest treatments, beauty tips, and exclusive offers crafted just for you.
            </p>
            
            <form 
              action="mailto:veanmikhael@proton.me" 
              method="post"
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input 
                type="email" 
                placeholder="Enter your email address"
                required
                tabIndex={0}
                aria-label="Email address"
                className="flex-1 px-6 py-4 border-2 border-oasis-taupe/30 rounded-full bg-white text-oasis-espresso placeholder:text-oasis-taupe/60 focus:outline-none focus:ring-2 focus:ring-oasis-taupe focus:border-transparent shadow-sm text-base transition-all duration-300"
              />
              <button 
                type="submit"
                tabIndex={0}
                className="bg-gradient-to-r from-oasis-espresso to-oasis-hover text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 text-base whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-oasis-espresso to-oasis-hover text-white py-12 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-oasis-warm-taupe text-sm leading-relaxed">
                © 2025 Oasis Aesthetics. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                <a href="privacy.html" className="text-oasis-warm-taupe hover:text-white transition-colors duration-300 text-sm hover:underline" tabIndex={0}>Privacy Policy</a>
                <span className="text-oasis-warm-taupe">|</span>
                <a href="terms-of-service.html" className="text-oasis-warm-taupe hover:text-white transition-colors duration-300 text-sm hover:underline" tabIndex={0}>Terms of Service</a>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/oasisaesthetics.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-oasis-warm-taupe hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
                aria-label="Follow us on Instagram"
                tabIndex={0}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="mailto:veanmikhael@proton.me"
                className="text-oasis-warm-taupe hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
                aria-label="Send us an email"
                tabIndex={0}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
