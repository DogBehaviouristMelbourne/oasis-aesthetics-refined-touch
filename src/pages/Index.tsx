
import React, { useState } from 'react';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-h-screen bg-oasis-base font-inter">
      <header className="sticky top-0 z-50 bg-oasis-base/95 backdrop-blur-sm border-b border-oasis-taupe/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl lg:text-3xl font-playfair font-semibold text-oasis-espresso">
              Oasis Aesthetics
            </h1>
            
            <button 
              className={`md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1.5 transition-all duration-300 ${isNavOpen ? 'rotate-45' : ''}`}
              aria-label="Open navigation" 
              aria-controls="main-nav" 
              aria-expanded={isNavOpen}
              onClick={toggleNav}
            >
              <span className={`w-6 h-0.5 bg-oasis-espresso transition-all duration-300 ${isNavOpen ? 'rotate-90 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-oasis-espresso transition-all duration-300 ${isNavOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-oasis-espresso transition-all duration-300 ${isNavOpen ? '-rotate-90 -translate-y-2' : ''}`}></span>
            </button>
            
            <nav 
              id="main-nav" 
              aria-label="Main Navigation"
              className={`${isNavOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-oasis-base md:bg-transparent border-b md:border-b-0 border-oasis-taupe/20 md:border-0 flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 py-6 md:py-0 px-6 md:px-0`}
            >
              <a href="index.html" className="text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium">Home</a>
              <a href="about.html" className="text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium">About</a>
              <a href="services.html" className="text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium">Services</a>
              <a href="gallery.html" className="text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium">Gallery</a>
              <a href="blog.html" className="text-oasis-espresso hover:text-oasis-hover transition-colors duration-300 font-medium">Blog</a>
              <a href="booking.html" className="bg-oasis-espresso text-white px-6 py-2 rounded-full hover:bg-oasis-hover transition-all duration-300 font-medium">Book</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-oasis-base via-oasis-contrast to-oasis-warm-taupe opacity-50"></div>
          <div className="container mx-auto text-center relative z-10 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-playfair font-semibold text-oasis-espresso mb-6 leading-tight">
              Empowering Your Natural Beauty
            </h2>
            <p className="text-xl lg:text-2xl text-oasis-hover mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert brow sculpting & waxing with a personal touch in Melbourne.
            </p>
            <p className="text-lg text-oasis-espresso/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Welcome to Oasis Aesthetics, where your comfort and confidence come first. Experience gentle, precise treatments in a relaxing, spa-like environment.
            </p>
            <a 
              href="booking.html" 
              className="inline-block bg-oasis-espresso text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-oasis-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Appointment
            </a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-oasis-contrast px-6 lg:px-8">
          <div className="container mx-auto">
            <h3 className="text-3xl lg:text-4xl font-playfair font-semibold text-oasis-espresso text-center mb-16">
              What Our Clients Say
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="bg-white p-8 rounded-2xl shadow-sm border border-oasis-taupe/30 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <p className="text-oasis-espresso/90 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <span className="text-oasis-hover font-medium">
                    - {testimonial.author}
                  </span>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto">
            <h3 className="text-3xl lg:text-4xl font-playfair font-semibold text-oasis-espresso text-center mb-16">
              Why Choose Oasis Aesthetics?
            </h3>
            <div className="max-w-4xl mx-auto">
              <ul className="grid md:grid-cols-2 gap-6">
                {[
                  "Personalized consultations for every client",
                  "Use of high-quality, gentle products",
                  "Relaxing, spa-like atmosphere",
                  "Strict hygiene and safety protocols",
                  "Tailored treatments for your unique features"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-oasis-taupe/20 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-oasis-taupe rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-oasis-espresso leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-oasis-contrast px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-playfair font-semibold text-oasis-espresso mb-8">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-oasis-hover mb-12 max-w-2xl mx-auto">
              Stay updated with our latest treatments, tips, and exclusive offers.
            </p>
            <form 
              action="mailto:veanmikhael@proton.me" 
              method="post"
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            >
              <input 
                type="email" 
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 border-0 rounded-full bg-white text-oasis-espresso placeholder:text-oasis-taupe focus:outline-none focus:ring-2 focus:ring-oasis-taupe shadow-sm"
              />
              <button 
                type="submit"
                className="bg-oasis-espresso text-white px-8 py-4 rounded-full font-medium hover:bg-oasis-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-oasis-espresso text-white py-12 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <small className="text-oasis-warm-taupe text-center md:text-left">
              © 2025 Oasis Aesthetics. All rights reserved. 
              <a href="privacy.html" className="hover:text-white transition-colors duration-300 ml-2">Privacy Policy</a> | 
              <a href="terms-of-service.html" className="hover:text-white transition-colors duration-300 ml-2">Terms of Service</a>
            </small>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/oasisaesthetics.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-oasis-warm-taupe hover:text-white transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                Instagram
              </a>
              <a 
                href="mailto:veanmikhael@proton.me"
                className="text-oasis-warm-taupe hover:text-white transition-colors duration-300"
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
