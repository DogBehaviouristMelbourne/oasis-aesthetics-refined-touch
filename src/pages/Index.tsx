import React, { useState, useEffect } from 'react';
import { BookingSystem } from '../components/BookingSystem';
import { ServiceCards } from '../components/ServiceCards';
import { Gallery } from '../components/Gallery';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';
import { ParallaxHero } from '../components/ParallaxHero';
import { FloatingActionButton } from '../components/FloatingActionButton';
import { InteractiveTestimonials } from '../components/InteractiveTestimonials';
import { TransformationStories } from '../components/TransformationStories';
import { TrustBadges } from '../components/TrustBadges';
import { Header } from '../components/Header';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    return () => {
      // Cleanup meta tags on unmount
      document.head.removeChild(metaKeywords);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
      document.head.removeChild(schemaScript);
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
    <div className="min-h-screen bg-oasis-base font-inter relative overflow-x-hidden">
      {/* Organic background shapes - repositioned to avoid overlaps */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-gradient-to-br from-oasis-taupe/8 to-oasis-clay/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -right-20 w-64 h-64 bg-gradient-to-tl from-oasis-warm-taupe/8 to-oasis-contrast/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-oasis-clay/4 to-oasis-taupe/4 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <Header 
        isNavOpen={isNavOpen} 
        toggleNav={toggleNav} 
        handleKeyDown={handleKeyDown} 
        scrollY={scrollY} 
      />

      <main className="relative z-10">
        {/* Parallax Hero Section */}
        <ParallaxHero scrollY={scrollY} />

        {/* Trust Badges with proper spacing */}
        <div className="pt-8">
          <TrustBadges />
        </div>

        {/* Service Cards with proper spacing */}
        <div id="services" className="scroll-mt-20 pt-16">
          <ServiceCards />
        </div>

        {/* Transformation Stories */}
        <div className="pt-16">
          <TransformationStories />
        </div>

        {/* Gallery */}
        <div className="pt-16">
          <Gallery />
        </div>

        {/* Booking System */}
        <div id="booking" className="scroll-mt-20 pt-16">
          <BookingSystem />
        </div>

        {/* Interactive Testimonials */}
        <div className="pt-16">
          <InteractiveTestimonials />
        </div>

        {/* Why Choose Us */}
        <div className="pt-16">
          <WhyChooseUs />
        </div>

        {/* FAQ Section */}
        <div className="pt-16">
          <FAQ />
        </div>

        {/* Contact Form */}
        <div className="pt-16">
          <ContactForm />
        </div>

        {/* Newsletter */}
        <div className="pt-16">
          <Newsletter />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
};

export default Index;
