
import React, { useState } from 'react';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-h-screen bg-oasis-base font-inter">
      <header className="sticky top-0 z-50 bg-oasis-base/95 backdrop-blur-sm border-b border-oasis-taupe/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl lg:text-2xl font-playfair font-semibold text-oasis-espresso">
              Oasis Aesthetics
            </h1>
            
            <button 
              className={`md:hidden w-6 h-6 flex flex-col justify-center items-center space-y-1 transition-all duration-300 ${isNavOpen ? 'rotate-45' : ''}`}
              aria-label="Open navigation" 
              aria-controls="main-nav" 
              aria-expanded={isNavOpen}
              onClick={toggleNav}
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
              <a href="index.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium">Home</a>
              <a href="about.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium">About</a>
              <a href="services.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium">Services</a>
              <a href="gallery.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium">Gallery</a>
              <a href="blog.html" className="text-sm text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium">Blog</a>
              <a href="booking.html" className="bg-oasis-espresso text-white px-4 py-2 rounded-full hover:bg-oasis-hover transition-all duration-300 font-medium text-sm">Book</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-12 lg:py-20 px-4 lg:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-oasis-base via-oasis-contrast to-oasis-warm-taupe opacity-50"></div>
          <div className="container mx-auto text-center relative z-10 animate-fade-in max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-playfair font-semibold text-oasis-espresso mb-4 leading-tight">
              Empowering Your Natural Beauty
            </h2>
            <p className="text-lg lg:text-xl text-oasis-hover mb-4 leading-relaxed">
              Expert brow sculpting & waxing with a personal touch in Melbourne.
            </p>
            <p className="text-base text-oasis-espresso/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to Oasis Aesthetics, where your comfort and confidence come first. Experience gentle, precise treatments in a relaxing, spa-like environment.
            </p>
            <a 
              href="booking.html" 
              className="inline-block bg-oasis-espresso text-white px-8 py-3 rounded-full text-base font-medium hover:bg-oasis-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Appointment
            </a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-oasis-contrast px-4 lg:px-6">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-2xl lg:text-3xl font-playfair font-semibold text-oasis-espresso text-center mb-10">
              What Our Clients Say
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="bg-white p-6 rounded-2xl shadow-sm border border-oasis-taupe/30 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <p className="text-sm text-oasis-espresso/90 leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <span className="text-sm text-oasis-hover font-medium">
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
            <h3 className="text-2xl lg:text-3xl font-playfair font-semibold text-oasis-espresso text-center mb-10">
              Why Choose Oasis Aesthetics?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Personalized consultations for every client",
                "Use of high-quality, gentle products",
                "Relaxing, spa-like atmosphere",
                "Strict hygiene and safety protocols",
                "Tailored treatments for your unique features"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-oasis-taupe/20 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-oasis-taupe rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-oasis-espresso leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-oasis-contrast px-4 lg:px-6">
          <div className="container mx-auto text-center max-w-2xl">
            <h3 className="text-2xl lg:text-3xl font-playfair font-semibold text-oasis-espresso mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-oasis-hover mb-8">
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
                className="flex-1 px-4 py-3 border-0 rounded-full bg-white text-oasis-espresso placeholder:text-oasis-taupe focus:outline-none focus:ring-2 focus:ring-oasis-taupe shadow-sm text-sm"
              />
              <button 
                type="submit"
                className="bg-oasis-espresso text-white px-6 py-3 rounded-full font-medium hover:bg-oasis-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-oasis-espresso text-white py-8 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <small className="text-oasis-warm-taupe text-center md:text-left text-xs">
              © 2025 Oasis Aesthetics. All rights reserved. 
              <a href="privacy.html" className="hover:text-white transition-colors duration-300 ml-2">Privacy Policy</a> | 
              <a href="terms-of-service.html" className="hover:text-white transition-colors duration-300 ml-2">Terms of Service</a>
            </small>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/oasisaesthetics.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-oasis-warm-taupe hover:text-white transition-colors duration-300 text-sm"
                aria-label="Follow us on Instagram"
              >
                Instagram
              </a>
              <a 
                href="mailto:veanmikhael@proton.me"
                className="text-oasis-warm-taupe hover:text-white transition-colors duration-300 text-sm"
                aria-label="Send us an email"
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
